import {error, testFunction} from '@nlib/test';
import {parseMessage} from './parseMessage';

testFunction(parseMessage, ['chore: subject'], {
    type: 'chore',
    scope: null,
    subject: 'subject',
    body: '',
});
testFunction(parseMessage, ['chore subject'], error({code: 'NoCommitType'}));
testFunction(parseMessage, ['chore: subject\nbody line1\nbody line2'], {
    type: 'chore',
    scope: null,
    subject: 'subject',
    body: 'body line1\nbody line2',
});
