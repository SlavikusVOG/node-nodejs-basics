import stream from "node:stream/promises";
import fs from "node:fs";
import zlib from "node:zlib";

const filePath = "./src/zip/files/fileToCompress.txt";
const archivePath = "./src/zip/files/archive.gz";

const decompress = async () => {
  // Write your code here
  await stream.pipeline(
    fs.createReadStream(archivePath),
    zlib.createGunzip(),
    fs.createWriteStream(filePath),
  )
};

await decompress();
