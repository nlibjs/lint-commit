import {AppError, CodeTester, findIndexOfCharCode} from '@nlib/global';
import {checkString} from './checkString';
import {ParseMessageError, ParseMessageResult, MessageConfig} from './types';

export const DefaultMessageConfig: MessageConfig = {
    type: [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'deps',
        'breaking',
    ],
    scope: /^[\w-]+$/,
    subject: () => true,
    maxLength: Infinity,
};

const Space = 0x20;
const LeftParenthesis = 0x28;
const RightParenthesis = 0x29;
const Colon = 0x3A;
const isEndOfType: CodeTester = (code) => code === LeftParenthesis || code === Colon;
const isEndOfScope: CodeTester = (code) => code === RightParenthesis;

export const parseSubjectLine = (
    line: string,
    messageConfig: Partial<MessageConfig> = {},
): ParseMessageResult | ParseMessageError => {
    const config = {...DefaultMessageConfig, ...messageConfig};
    let index = findIndexOfCharCode(line, isEndOfType, 0);
    const type = line.slice(0, index);
    if (!checkString(type, config.type)) {
        throw new AppError({code: 'InvaildCommitType', data: {line, config}});
    }
    let scope: string | null = null;
    if (line.charCodeAt(index) === LeftParenthesis) {
        const scopeStart = index + 1;
        const scopeEnd = findIndexOfCharCode(line, isEndOfScope, scopeStart);
        if (scopeEnd < 0) {
            return {error: new AppError({code: 'UnclosedParenthesis', data: {line, config}})};
        }
        scope = line.slice(scopeStart, scopeEnd);
        if (!checkString(scope, config.scope)) {
            return {error: new AppError({code: 'InvalidScope', data: {scope, config}})};
        }
        index = scopeEnd + 1;
    }
    if (line.charCodeAt(index) === Colon) {
        index += 1;
    } else {
        return {error: new AppError({code: 'NoColon', data: {line, config}})};
    }
    if (line.charCodeAt(index) !== Space) {
        return {error: new AppError({code: 'NoSpaceBeforeSubject', data: {line, config}})};
    }
    const subject = line.slice(index + 1);
    if (!checkString(subject, config.subject)) {
        return {error: new AppError({code: 'InvalidSubject', data: {subject, config}})};
    }
    return {type, scope, subject};
};
