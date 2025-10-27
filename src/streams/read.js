import fs from "node:fs";

const filePath = "./src/streams/files/fileToRead.txt";

const read = async () => {
  // Write your code here
  const input = fs.createReadStream(filePath);
  for await (const chunk of input) {
    process.stdout.write(chunk);
  }
  process.stdout.write('\n');
};

await read();
