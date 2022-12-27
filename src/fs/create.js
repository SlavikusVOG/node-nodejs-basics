import fsPromise from "node:fs/promises"
import path from "node:path";
import url from "node:url";

const create = async () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta#getting_current_modules_file_path
    const currentModule = url.fileURLToPath(import.meta.url);
    console.log(currentModule);
    const currentDir = path.dirname(`${currentModule}`);
    const destDir = path.join(currentDir, 'files');
    console.log(destDir);
    const FILE_NAME = "fresh.txt";
    try {
        await fsPromise.writeFile(
            path.join(destDir, FILE_NAME),
            "I am fresh and young",
            {mode: fsPromise.constants.COPYFILE_EXCL}
        );
    }
    catch(err) {
        throw new Error("FS operation failed")
    }
};

await create();