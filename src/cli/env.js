const parseEnv = () => {
  // Write your code here
  const envVariablesKeys = Object.keys(process.env);
  envVariablesKeys.forEach((k) => {
    if (k.startsWith("RSS_")) {
      console.log(`${k}=${process.env[k]}`);
    }
  });
};

parseEnv();
