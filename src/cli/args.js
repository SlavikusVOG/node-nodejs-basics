const parseArgs = () => {
  // Write your code here
  let valueNameFlag = false;
  const result = [];
  process.argv.reduce((previous, current) => {
    if (previous) {
      result.push(`${previous} is ${current}`);
      return null
    }
    else if (current.startsWith("--")) {
      return current.substr(2);
    }
  });
  console.log(result.join(', '));
};

parseArgs();
