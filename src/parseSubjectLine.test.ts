import {testFunction, error} from '@nlib/test';
import {parseSubjectLine} from './parseSubjectLine';

testFunction(parseSubjectLine, ['chore: subject'], {
    type: 'chore',
    scope: null,
    subject: 'subject',
});
testFunction(parseSubjectLine, ['chore subject'], error({code: 'NoCommitType'}));
testFunction(parseSubjectLine, ['c: subject'], error({code: 'InvaildCommitType'}));
testFunction(parseSubjectLine, ['chore(scope): subject'], {
    type: 'chore',
    scope: 'scope',
    subject: 'subject',
});
testFunction(parseSubjectLine, ['chore(scope: subject'], error({code: 'UnclosedParenthesis'}));
testFunction(parseSubjectLine, ['chore(scope ): subject'], error({code: 'InvaildCommitScope'}));
testFunction(parseSubjectLine, ['chore(scope) subject'], error({code: 'NoColon'}));
testFunction(parseSubjectLine, ['chore(scope):subject'], error({code: 'NoSpaceBeforeSubject'}));
testFunction(parseSubjectLine, ['chore(scope): B', {subject: /^A/}], error({code: 'InvalidSubject'}));
