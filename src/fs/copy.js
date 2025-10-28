import fs from "node:fs/promises";

const folder = "./src/fs/files";

const copy = async () => {
  // Write your code here
  try {
    await fs.access(folder);
    await fs.access(`${folder}_copy`);
    throw new Error("FS operation failed");
  }
  catch(error) {
    if (error.syscall === "access") {
      try {
        await fs.access(folder);
        fs.cp(folder, `${folder}_copy`, {recursive: true});
      }
      catch(error) {
        throw new Error("FS operation failed");
      }
    }
    else {
      throw error;
    }
  }
};

await copy();
