const parseArgs = () => {
  // Write your code here
  let valueNameFlag = false;
  process.argv.reduce((previous, current) => {
    if (previous) {
      console.log(`${previous} is ${current}`);
      return null
    }
    else if (current.startsWith("--")) {
      return current.substr(2);
    }
  });
};

parseArgs();
