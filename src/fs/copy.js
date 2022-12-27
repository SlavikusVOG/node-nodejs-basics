import fsPromises from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const copy = async () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta#getting_current_modules_file_path
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.join(path.dirname(__filename));
    const folder = path.join(__dirname, 'files');
    const newFolder = path.join(__dirname, 'files_copy');
    await fsPromises.mkdir(newFolder, { recursive: true });
    const files = await fsPromises.readdir(folder);
    files.forEach((file) => {
        try{
            fsPromises.copyFile(path.join(folder, file), path.join(newFolder, file), fsPromises.constants.COPYFILE_EXCL);
        }
        catch(error) {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
