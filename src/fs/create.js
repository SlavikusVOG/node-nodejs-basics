import fs from "node:fs/promises";
import path from "node:path";

const fresh = "./files/fresh.txt";
const str = "I am fresh and young";

const create = async () => {
  // Write your code here
  try {
    const stat = await fs.stat(fresh);
    if (stat.isFile()) {
      throw Error("FS operation failed");
    }
    else {
      await fs.rmdir(fresh);
      await fs.writeFile(fresh, str);
    }
  }
  catch(error) {
    if (error.syscall === "stat") {
      try {
        await fs.access(path.dirname(fresh));
      }
      catch(error) {
        fs.mkdir(path.dirname(fresh));
      }
      finally{
        await fs.writeFile(fresh, str);
      }
    }
    else {
      throw error;
    }
  }
};

await create();
