import fs from "node:fs/promises";

const errorMessage = "FS operation failed";
const fileName = "fileToRemove.txt";

const remove = async () => {
  // Write your code here
  try {
    await fs.access(fileName);
    await fs.rm(fileName);
  }
  catch(error) {
    if (error.syscall === "access") {
      throw new Error(errorMessage);
    }
    else {
      console.error(error);
    }
  }
};

await remove();
