import fs from "node:fs/promises";

const errorMessage = "FS operation failed";
const fileName = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
  // Write your code here
  try {
    const fileStat = await fs.stat(fileName);
    if (fileStat.isFile()) {
      await fs.rm(fileName);
    }
    throw new Error(errorMessage);
  }
  catch(error) {
    if (error.syscall === "stat") {
      throw new Error(errorMessage);
    }
    else {
      throw error
    }
  }
};

await remove();
