import ava from 'ava';
import {parseMessage} from './parseMessage';

interface Case {
    input: string,
    expected: ReturnType<typeof parseMessage>,
}

const cases: Array<Case> = [
    {
        input: 'chore: subject',
        expected: {
            type: 'chore',
            scope: null,
            subject: 'subject',
            body: '',
        },
    },
    {
        input: 'chore: subject\nbody line1\nbody line2',
        expected: {
            type: 'chore',
            scope: null,
            subject: 'subject',
            body: 'body line1\nbody line2',
        },
    },
];

for (const {input, expected} of cases) {
    ava(`${input} → ${JSON.stringify(expected)}`, (t) => {
        t.deepEqual(parseMessage(input), expected);
    });
}

ava('chore subject → Error:NoCommitType', (t) => {
    t.throws(() => {
        parseMessage('chore subject');
    });
});
