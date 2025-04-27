import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const sourceFilePath = path.join(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );

  const sha256 = crypto.createHash('sha256');
  const fsStream = fs.createReadStream(sourceFilePath);

  fsStream.on('data', (chunk) => sha256.update(chunk));
  fsStream.on('end', () => console.log(sha256.digest('hex')));
  fsStream.on('error', (err) =>
    console.log(`Error while calculating hash: `, err)
  );
};

await calculateHash();
