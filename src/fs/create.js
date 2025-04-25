import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  // Write your code here
  try {
    const filename = 'fresh.txt';
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filepath = path.join(__dirname, 'files', filename);
    const content = 'I am fresh and young';

    const isFileExists = await checkFileExists(filepath);

    if (isFileExists) throw new Error('FS operation failed');

    await fs.writeFile(filepath, content);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

// helper function for asynchronously check is directory of file file exists
const checkFileExists = async (_filepath) => {
  try {
    await fs.access(_filepath);
    return true;
  } catch (error) {
    return false;
  }
};

await create();
