import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  // Write your code here
  try {
    const filename = 'fileToRead.txt';
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filepath = path.join(__dirname, 'files', filename);

    const fileContent = await fs.readFile(filepath, 'utf-8');
    console.log(fileContent);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();
