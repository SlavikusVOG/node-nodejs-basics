import os from "os";
import {
  Worker, MessageChannel, MessagePort, isMainThread, parentPort
} from 'node:worker_threads';

const performCalculations = async () => {
  // Write your code here
  const coresCount = os.cpus().length;
  const values = [];
  for (let i = 10; i < 10 + coresCount; i++) {
    values.push(i);
  }
  const results = await Promise.all(values.map(async (v, index) => {
    return new Promise((resolve) => {
      const worker = new Worker("./src/wt/worker.js", {
        workerData: {n: v},
      });
      worker.on("message", (r) => {
        resolve({status: "resolved", data: r});
      });
      worker.on("error", (error) => {
        resolve({status: "error", data: null});
      })
    })
  }));
  results.forEach((r) => {
    console.log(`{status: ${r.status}, data: ${r.data}}`);
  })
};

await performCalculations();
