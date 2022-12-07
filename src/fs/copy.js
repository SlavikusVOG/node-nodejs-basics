import fsPromises from 'fs/promises';
import path from 'path';
import url from 'url';

const copy = async () => {
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
