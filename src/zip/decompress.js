import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const decompress = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const archivePath = path.join(__dirname, 'files', 'archive.gz');
  const destinationPath = path.join(__dirname, 'files', 'fileToCompress.txt');

  const gunzip = zlib.createGunzip();
  gunzip.on('error', (err) =>
    console.error(`Error while decompression: `, err)
  );

  const archiveReadStream = fs.createReadStream(archivePath);
  archiveReadStream.on('error', (err) =>
    console.error(`Error while reading file: `, err)
  );

  const writeFileStream = fs.createWriteStream(destinationPath);
  writeFileStream.on('error', (err) =>
    console.error(`Error while writing file: `, err)
  );

  await pipeline(archiveReadStream, gunzip, writeFileStream);
  // NOTE file will be unzipped and will be replaced if original file exists.
};

await decompress();
