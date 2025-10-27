import { spawn } from "node:child_process";

const filePath = "./src/cp/files/script.js";

const spawnChildProcess = async (args) => {
  // Write your code here
  const child = spawn("node", [filePath, ...args], {
    stdio: ['pipe', 'pipe'],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  [true, 2, 'test3'] );
