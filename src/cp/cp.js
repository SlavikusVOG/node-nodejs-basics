import child_process from 'node:child_process';
import path from "node:path";

const spawnChildProcess = async (args) => {
    // Write your code here
    // const subProcess = child_process.fork ('node files/script.js', [...args]);
    const subProcessArgs = args ? [...args] : [];
    const subProcess = child_process.spawn('node files/script.js', subProcessArgs, {stdio: ['pipe', 'pipe', process.stderr]});

    subProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
