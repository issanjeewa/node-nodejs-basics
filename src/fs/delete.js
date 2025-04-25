import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  // Write your code here
  try {
    const filename = 'fileToRemove.txt';
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filepath = path.join(__dirname, 'files', filename);

    await fs.unlink(filepath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
