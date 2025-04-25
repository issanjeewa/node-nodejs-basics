import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  // Write your code here
  try {
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const oldPath = path.join(__dirname, 'files', oldFileName);
    const newPath = path.join(__dirname, 'files', newFileName);

    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
