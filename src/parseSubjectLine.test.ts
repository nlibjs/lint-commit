import type {ThrowsExpectation} from 'ava';
import ava from 'ava';
import {parseSubjectLine} from './parseSubjectLine';
import type {MessageConfig} from './types';

interface Case {
    input: string,
    expected: ReturnType<typeof parseSubjectLine>,
}

const cases: Array<Case> = [
    {
        input: 'chore: subject',
        expected: {
            type: 'chore',
            scope: null,
            subject: 'subject',
        },
    },
    {
        input: 'chore(scope): subject',
        expected: {
            type: 'chore',
            scope: 'scope',
            subject: 'subject',
        },
    },
];

for (const {input, expected} of cases) {
    ava(`${input} → ${JSON.stringify(expected)}`, (t) => {
        t.deepEqual(parseSubjectLine(input), expected);
    });
}

interface ErrorCase {
    input: string,
    config?: Partial<MessageConfig>,
    expected: ThrowsExpectation,
}

const errorCases: Array<ErrorCase> = [
    {
        input: 'chore subject',
        expected: {code: 'NoCommitType'},
    },
    {
        input: 'c: subject',
        expected: {code: 'InvaildCommitType'},
    },
    {
        input: 'chore(scope: subject',
        expected: {code: 'UnclosedParenthesis'},
    },
    {
        input: 'chore(scope ): subject',
        expected: {code: 'InvaildCommitScope'},
    },
    {
        input: 'chore(scope) subject',
        expected: {code: 'NoColon'},
    },
    {
        input: 'chore(scope):subject',
        expected: {code: 'NoSpaceBeforeSubject'},
    },
    {
        input: 'chore(scope): B',
        config: {subject: /^A/},
        expected: {code: 'InvalidSubject'},
    },
];

for (const {input, expected, config} of errorCases) {
    ava(`${input} → ${JSON.stringify(expected)}`, (t) => {
        t.throws(() => {
            parseSubjectLine(input, config);
        }, expected);
    });
}

