import fs from "node:fs/promises";
import path from "node:path";

const fresh = "./files/fresh.txt";

const create = async () => {
  // Write your code here
  try {
    await fs.access(fresh);
    throw Error("FS operation failed");
  }
  catch(error) {
    if (error.syscall === "access") {
      try {
        await fs.access(path.dirname(fresh));
      }
      catch(error) {
        fs.mkdir(path.dirname(fresh));
      }
      finally{
        const str = "I am fresh and young";
        await fs.writeFile("files/fresh.txt", str);
      }
    }
    else {
      throw error;
    }
  }
};

await create();
