import instrument from './instrument-lib';
import { readCode } from './utils';

require.extensions['.js'] = (module, filename) => {
    if (filename.match(/source\.js$/)) {
        module._compile(instrument(filename), filename);
    }
    else {
        module._compile(readCode(filename), filename);
    }
}
