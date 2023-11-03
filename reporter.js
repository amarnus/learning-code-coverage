const mocha = require('mocha');
const fs = require('fs');
const { toLCOV } = require('./bin/utils');

class LCOVReporter extends mocha.reporters.Spec {

    constructor(runner) {
        super(runner);

        runner.on('end', () => {
            if (__coverage__) {
                fs.writeFileSync('./lcov.info', toLCOV(__coverage__),{flag:'w+'});
            }
        });
    }

}

module.exports = LCOVReporter;
