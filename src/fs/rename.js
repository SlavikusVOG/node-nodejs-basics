import fs from "node:fs/promises";

const errorMessage = "FS operation failed";
const fileName = "wrongFilename.txt";
const properFilename = "properFilename.md";

const rename = async () => {
  // Write your code here
  try {
    await fs.access(fileName);
    await fs.access(properFilename);
    throw new Error(errorMessage);
  }
  catch(error) {
    if (error.syscall === "access") {
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
