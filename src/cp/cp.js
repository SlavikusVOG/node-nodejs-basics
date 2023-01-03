const child_process = require('node:child_process');

const spawnChildProcess = async (args) => {
    // Write your code here
    const subProcess = child_process.fork ('node files/script.js', [...args]);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
