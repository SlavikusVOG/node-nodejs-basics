import fs from "node:fs/promises";

const errorMessage = "FS operation failed";
const filePath = "./src/fs/files/fileToRead.txt";

const read = async () => {
  // Write your code here
  try {
    const fileStat = await fs.stat(filePath);
    if (fileStat.isFile()) {
      const fileContent = await fs.readFile(filePath);
      console.log(fileContent.toString());
    }
    else {
      throw new Error(errorMessage);
    }
  }
  catch(error) {
    throw new Error(errorMessage);
  }
};

await read();
