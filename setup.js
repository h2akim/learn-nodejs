#! /usr/bin/env node
const { exec } = require("child_process");
var clc = require("cli-color");

const setupServer = async () => {
  await exec("yarn install && yarn link", (error, stdout, stderr) => {
    console.log(stdout);
  });
};

const setupClient = async () => {
  exec("cd client && yarn install", (error, stdout, stderr) => {
    console.log(stdout);
  });
};

const run = async () => {
  const setupTitle = clc.xterm(39);
	console.log(setupTitle("👻 Ghosty Setup\n"));
  const setupSubtitle = clc.xterm(198);
	console.log(setupSubtitle("🚧 Setup Ghosty Backend & Frontend...\n"));
	await setupServer();
	await setupClient();
}

run();