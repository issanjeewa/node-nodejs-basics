import fs from 'fs';
import path from 'path';
import {} from 'stream';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const compress = async () => {
  // Write your code here
  const filename = 'fileToCompress.txt';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filepath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const gzip = zlib.createGzip();
  gzip.on('error', (err) => console.error(`Error while compression: `, err));

  const sourceFileStream = fs.createReadStream(filepath);
  sourceFileStream.on('error', (err) =>
    console.error(`Error while reading file: `, err)
  );

  const writeFileStream = fs.createWriteStream(
    path.join(__dirname, 'files', 'archive.gz')
  );
  writeFileStream.on('error', (err) =>
    console.error(`Error while writing file: `, err)
  );

  await pipeline(sourceFileStream, gzip, writeFileStream);
};

await compress();
