import fs from "node:fs";

const fileToWrite = "./src/streams/files/fileToWrite.txt";

const write = async () => {
  // Write your code here
  const output = fs.createWriteStream(fileToWrite);
  process.stdin.pipe(output);
};

await write();
