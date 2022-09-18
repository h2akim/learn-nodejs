#! /usr/bin/env node
const { exec } = require("child_process");

const setupServer = async () => {
  await exec("yarn install", (error, stdout, stderr) => {
    console.log(stdout);
  });
};

const setupClient = async () => {
  exec("cd client && yarn install", (error, stdout, stderr) => {
    console.log(stdout);
  });
};

const run = async () => {
	console.log("[👻 Ghosty Setup]\n");
	console.log("🚧 Setup Ghosty Backend & Frontend...\n");
	await setupServer();
	await setupClient();
}

run();