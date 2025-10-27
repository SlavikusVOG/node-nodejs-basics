import stream from "node:stream";

const transform = async () => {
  // Write your code here
  const reverser = new stream.Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    }
  });
  process.stdin
    .pipe(reverser)
    .pipe(process.stdout);
};

await transform();
