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
  console.log("👻 Ghosty Setup\n");
  console.log("🚧 Pulling Submodules...\n");
  pullSubmodules();
  console.log("🚧 Setup Ghosty Backend...\n");
  setupServer();
  console.log("🚧 Setup Ghosty Frontend...\n");
  setupClient();
};

run();
