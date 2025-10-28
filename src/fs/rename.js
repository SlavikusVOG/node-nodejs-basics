import fs from "node:fs/promises";

const errorMessage = "FS operation failed";
const fileName = "./src/fs/files/wrongFilename.txt";
const properFilename = "./src/fs/files/properFilename.md";

const rename = async () => {
  // Write your code here
  try {
    const fileNameStat = await fs.stat(fileName);
    if (fileNameStat.isDirectory()) {
      throw new Error(errorMessage);
    }
    await fs.stat(properFilename);
    throw new Error(errorMessage);
  }
  catch(error) {
    if (error.syscall === "stat") {
      try {
        await fs.access(fileName);
      }
      catch(error) {
        throw new Error(errorMessage);
      }
      await fs.rename(fileName, properFilename);
    }
    else {
      throw error
    }
  }
};

await rename();
