import crypto from "node:crypto";
import fs from "node:fs";

const filePath = "./src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  // Write your code here
  const hash = crypto.createHash("sha256");
  const input = fs.createReadStream(filePath);
  for await (const chunk of input) {
    hash.update(chunk);
  }
  console.log(hash.digest('hex'));
};

await calculateHash();
