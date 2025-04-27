const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  const argsStrArr = [];

  for (let i = 0; i < args.length; i++) {
    if (
      args[i].startsWith('--') &&
      !!args[i + 1] &&
      !args[i + 1].startsWith('--')
    ) {
      argsStrArr.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }
  }

  console.log(argsStrArr.join(', '));
};

parseArgs();
