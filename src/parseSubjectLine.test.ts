import {testFunction, error} from '@nlib/test';
import {parseSubjectLine} from './parseSubjectLine';

const parse = (...args: Parameters<typeof parseSubjectLine>) => {
    const result = parseSubjectLine(...args);
    if (result.error) {
        throw result.error;
    }
    return result;
};

testFunction(parse, ['chore: subject'], {
    type: 'chore',
    scope: null,
    subject: 'subject',
});
testFunction(parse, ['chore subject'], error({code: 'NoCommitType'}));
testFunction(parse, ['c: subject'], error({code: 'InvaildCommitType'}));
testFunction(parse, ['chore(scope): subject'], {
    type: 'chore',
    scope: 'scope',
    subject: 'subject',
});
testFunction(parse, ['chore(scope: subject'], error({code: 'UnclosedParenthesis'}));
testFunction(parse, ['chore(scope ): subject'], error({code: 'InvaildCommitScope'}));
testFunction(parse, ['chore(scope) subject'], error({code: 'NoColon'}));
testFunction(parse, ['chore(scope):subject'], error({code: 'NoSpaceBeforeSubject'}));
testFunction(parse, ['chore(scope): B', {subject: /^A/}], error({code: 'InvalidSubject'}));
