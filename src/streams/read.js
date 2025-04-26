import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const read = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filepath = path.join(__dirname, 'files', 'fileToRead.txt');

  const readStream = fs.createReadStream(filepath);

  await pipeline(readStream, process.stdout);
  // NOTE after running, type something in the terminal and press enter, to exit press ctrl + C
};

await read();
