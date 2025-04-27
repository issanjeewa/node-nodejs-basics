import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const workerPath = path.join(__dirname, 'worker.js');

  const startNum = 10;

  const numberOfCores = os.cpus()?.length || os.availableParallelism();
  const results = Array(numberOfCores).fill(null);

  for (let i = 0; i < numberOfCores; i++) {
    const input = startNum + i;
    const worker = new Worker(workerPath, { workerData: { num: input } });
    worker.on('message', (result) => {
      results[i] = { status: 'resolved', data: result };

      if (!results.includes(null)) {
        console.log(results);
      }
    });

    worker.on('error', (err) => {
      results[i] = { status: 'error', data: null };
      console.error(`Error from worker ${i}`, err);

      if (!results.includes(null)) {
        console.log(results);
      }
    });
  }
};

await performCalculations();