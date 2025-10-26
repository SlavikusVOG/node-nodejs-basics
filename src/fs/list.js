import fs from "node:fs/promises";

const errorMessage = "FS operation failed";
const directory = "files";

const list = async () => {
  // Write your code here
  const directoryStat = await fs.stat(directory);
  if (directoryStat.isDirectory()) {
    const files = await fs.readdir(directory);
    await Promise.all(
      files.map(async (f) => {
        const fStat = await fs.stat(`${directory}/${f}`);
        if (fStat.isFile()) {
          console.log(f);
        }
      })
    );
  }
  else {
    throw new Error (errorMessage);
  }
};

await list();
