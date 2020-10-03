import {testFunction} from '@nlib/test';
import {parseMessage} from './parseMessage';

const parse = (...args: Parameters<typeof parseMessage>) => {
    const result = parseMessage(...args);
    if (result.error) {
        throw result.error;
    }
    return result;
};

testFunction(parse, {
    input: 'chore: subject',
    expected: {
        type: 'chore',
        scope: null,
        subject: 'subject',
        body: '',
    },
});
testFunction(parse, {
    input: 'chore subject',
    error: {code: 'InvaildCommitType'},
});
testFunction(parse, {
    input: 'chore: subject\nbody line1\nbody line2',
    expected: {
        type: 'chore',
        scope: null,
        subject: 'subject',
        body: 'body line1\nbody line2',
    },
});
