exports.command = 'test';
exports.description = 'run unit tests with mochapack';
exports.builder = {};

exports.handler = argv => {
    const execa = require('execa');
    const bin = require.resolve('mochapack/bin/mochapack');

    let rawArgv = [];
    Object.keys(argv).forEach(row => {
        const filter = [];
        if (!filter.includes(row)) {
            rawArgv.push(`--${row}`);
            rawArgv.push(argv[row]);
        }
    });

    let nodeArgs = [];

    // const inspectPos = rawArgv.findIndex(arg => arg.startsWith('--inspect-brk'));
    // if (inspectPos !== -1) {
    //     nodeArgs = rawArgv.splice(inspectPos, 1);
    // }

    const argvParams = [
        ...nodeArgs,
        bin,
        '--recursive',
        '--require',
        require.resolve('./setup.js'),
        '--webpack-config',
        require.resolve('./webpack.config.js'),
        ...rawArgv,
        ...['tests/**/*.spec.js']
    ];

    return new Promise((resolve, reject) => {
        const child = execa('node', argvParams, {stdio: 'inherit'});
        child.on('error', reject);
        child.on('exit', code => {
            if (code !== 0) {
                reject(`mochapack exited with code ${code}.`);
            }
            else {
                resolve();
            }
        });
    });
};
