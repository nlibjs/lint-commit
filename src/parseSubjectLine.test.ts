import {testFunction} from '@nlib/test';
import {parseSubjectLine} from './parseSubjectLine';

const parse = (...args: Parameters<typeof parseSubjectLine>) => {
    const result = parseSubjectLine(...args);
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
    },
});
testFunction(parse, {
    input: 'chore subject',
    error: {code: 'InvaildCommitType'},
});
testFunction(parse, {
    input: 'chore(scope): subject',
    expected: {
        type: 'chore',
        scope: 'scope',
        subject: 'subject',
    },
});
testFunction(parse, {
    input: 'chore(scope: subject',
    error: {code: 'UnclosedParenthesis'},
});
testFunction(parse, {
    input: 'chore(scope ): subject',
    error: {code: 'InvalidScope'},
});
testFunction(parse, {
    input: 'chore(scope) subject',
    error: {code: 'NoColon'},
});
testFunction(parse, {
    input: 'chore(scope):subject',
    error: {code: 'NoSpaceBeforeSubject'},
});
testFunction(parse, {
    parameters: [
        'chore(scope): B',
        {
            subject: /^A/,
        },
    ],
    error: {code: 'InvalidSubject'},
});
