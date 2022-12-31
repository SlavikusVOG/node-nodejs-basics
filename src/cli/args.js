const parseArgs = () => {
    // Write your code here 
    const cliArgs = process.argv.slice(2);
    let result = '';
    cliArgs.forEach((arg) => {
        if (arg.includes('--')) {
            result += arg.slice(2);
        }
        else {
            result += ` ${arg},`;
        }
    });
    result[result.length - 1] = '.';
    console.log(result)
};

parseArgs();