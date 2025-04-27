import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  // Write your code here
  try {
    const sourceDir = 'files';
    const destDir = 'files_copy';

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, sourceDir);
    const destPath = path.join(__dirname, destDir);

    const isSourceDirExists = await checkFileExists(sourcePath);
    if (!isSourceDirExists) throw new Error('FS operation failed');

    await fs.mkdir(destPath);
    await fs.cp(sourcePath, destPath, { recursive: true });
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

await copy();
