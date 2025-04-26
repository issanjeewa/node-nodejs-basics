import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filepath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const writeStream = fs.createWriteStream(filepath);

  process.stdin.pipe(writeStream);
  // NOTE after running type something in console and press enter, to exit press ctrl + C
};

await write();
