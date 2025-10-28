import stream from "node:stream/promises";
import fs from "node:fs";
import zlib from "node:zlib";

const filePath = "./src/zip/files/fileToCompress.txt";
const archivePath = "./src/zip/files/archive.gz";

const compress = async () => {
  // Write your code here
  await stream.pipeline(
    fs.createReadStream(filePath),
    zlib.createGzip(),
    fs.createWriteStream(archivePath),
  )
};

await compress();
