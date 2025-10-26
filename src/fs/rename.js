import fs from "node:fs/promises";

const errorMessage = "FS operation failed";
const fileName = "wrongFilename.txt";
const properFilename = "properFilename.md";

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
