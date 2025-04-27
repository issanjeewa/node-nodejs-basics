import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  // Write your code here
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const transformedChunk = chunk.toString().split('').reverse().join('');
      this.push(transformedChunk + '\n');
      callback();
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
  // NOTE after running, type something in the terminal and press enter, to exit press ctrl + C
};

await transform();
