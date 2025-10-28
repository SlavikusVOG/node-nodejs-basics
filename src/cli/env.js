const parseEnv = () => {
  // Write your code here
  const envVariablesKeys = Object.keys(process.env);
  const result = []
  envVariablesKeys.forEach((k) => {
    if (k.startsWith("RSS_")) {
      result.push(`${k}=${process.env[k]}`);
    }
  });
  console.log(result.join("; "))
};

parseEnv();
