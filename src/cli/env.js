const parseEnv = () => {
    // Write your code here 
    const variables = process.env;
    const envKeys = Object.keys(variables);
    let result = '';
    envKeys.forEach((envKey) => {
        if (envKey.includes('RSS_')){
            result += `${envKey}=${variables[envKey]}; `;
        }
    });
    if (result.length > 0) {
        result = result.slice(0, result.length - 2);
    }
    console.log(result);
};

parseEnv();