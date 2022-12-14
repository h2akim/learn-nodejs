const _ = require("lodash");
const fs = require("fs/promises");
const path = require("path");
const handlebars = require("handlebars");
const { toPascalCase } = require("js-convert-case");
const config = require("@config/general");

module.exports = async (args) => {
  if (_.isEmpty(args)) {
    console.error("🛑 Oops! Please provide controller name.");
    return;
  }

  const controllerName = args[0];
  try {
    const existingFile = await fs.stat(
      path.resolve(
        config.controller_directory + `/${controllerName}.js`
      )
    );
    if (existingFile) {
      console.error(
        `🛑 Oops! Controller ${controllerName}.js is already exists`
      );
      return;
    }
  } catch (e) {
    // just proceed if file not exists
  }

  try {
    const sourceFile = await fs.readFile(
      path.resolve(config.stub_directory + "/controller.stub")
    );
    const templateString = sourceFile.toString();
    const template = handlebars.compile(templateString);
    const contents = template({
      controllerName: toPascalCase(controllerName),
    });

    // write file
    await fs.writeFile(
      path.resolve(
        config.controller_directory + `/${controllerName}.js`
      ),
      contents
    );
    console.log(`✅ Succesfully created new controller - ${controllerName}.js`);
  } catch (e) {
    if (e.code === "ENOENT") {
      console.error("🛑 Failed to read template file / not exists");
    }
  }
};
