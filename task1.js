process.stdin.on('readable', () => {
  let chunk;

  while ((chunk = process.stdin.read()) !== null ) {
    const reversedChunk = chunk.reverse();

    process.stdout.write(`result: ${reversedChunk} \n`);
  }
});
