#! /usr/bin/env node
const { execSync } = require("child_process");

const pullSubmodules = () => {
  execSync(
    "git submodule update --init --recursive",
    (error, stdout, stderr) => {
      console.log(stdout);
    }
  );
};

const setupServer = () => {
  execSync("yarn install && yarn link", (error, stdout, stderr) => {
    console.log(stdout);
  });
};

const setupClient = () => {
  execSync("cd client && yarn install", (error, stdout, stderr) => {
    console.log(stdout);
  });
};

const run = () => {
  console.log("š» Ghosty Setup\n");
  console.log("š§ Pulling Submodules...\n");
  pullSubmodules();
  console.log("\nš§ Setup Ghosty Backend...\n");
  setupServer();
  console.log("\nš§ Setup Ghosty Frontend...\n");
  setupClient();
};

run();
