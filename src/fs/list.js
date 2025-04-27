import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  // Write your code here
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dirPath = path.join(__dirname, 'files');
    const files = await fs.readdir(dirPath);

    console.log(files);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();
