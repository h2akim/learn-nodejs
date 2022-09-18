const _ = require("lodash");
const path = require("path");
const { exec } = require("child_process");
const { replace } = require("lodash");
const config = require("@config/general");

module.exports = async (args) => {
  if (_.isEmpty(args)) {
    console.error("🛑 Oops! Please provide migration name.");
    return;
  }

  const knexFile = path.resolve(process.cwd() + "/server/knexfile.js");
  const migrationName = args[0];
  exec(
    `knex migrate:make ${migrationName} --knexfile=${knexFile}`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`🛑 Failed to create migration file: ${error.message}`);
        return;
      }

      if (stderr) {
        console.log(`🛑 Failed to create migration file: ${stderr}`);
        return;
      }

      let output = stdout.split("\n");
      output = output.filter((line) => line);
      const fullMigrationName = output.pop();
      const migrationDirectory = config.migration_directory;
      const actualMigrationName = replace(
        fullMigrationName,
        `Created Migration: ${migrationDirectory}/`,
        ""
      );
      console.log(
        `✅ Succesfully created new migration - ${actualMigrationName}`
      );
    }
  );
};
