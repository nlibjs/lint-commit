import { checkString } from './checkString.mjs';
import { LintError } from './LintError.mjs';
import type { ParseMessageResult, MessageConfig } from './types.mjs';

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
const Colon = 0x3a;
const isEndOfType = (code: number) =>
  code === LeftParenthesis || code === Colon;
const isEndOfScope = (code: number) => code === RightParenthesis;

export const parseSubjectLine = (
  line: string,
  messageConfig: Partial<MessageConfig> = {},
): ParseMessageResult => {
  const config = { ...DefaultMessageConfig, ...messageConfig };
  const type = getType(line, config, 0);
  const scope = getScope(line, config, type.endIndex);
  let index = scope.endIndex;
  if (line.charCodeAt(index) === Colon) {
    index += 1;
  } else {
    throw new LintError({
      code: 'NoColon',
      message: 'Please put ":" before the subject',
    });
  }
  if (line.charCodeAt(index) !== Space) {
    throw new LintError({
      code: 'NoSpaceBeforeSubject',
      message: 'Please put a space between ":" and the subject',
    });
  }
  const subject = line.slice(index + 1);
  if (!subject) {
    throw new LintError({
      code: 'NoSubject',
      message: 'Please specify the subject of this commit.',
    });
  }
  if (!checkString(subject, config.subject)) {
    throw new LintError({
      code: 'InvalidSubject',
      message: 'The subject is invalid.',
    });
  }
  return {
    type: type.value,
    scope: scope.value,
    subject,
  };
};

const getType = (line: string, config: MessageConfig, fromIndex: number) => {
  let endIndex = findIndexOfCodePoint(line, isEndOfType, fromIndex);
  if (endIndex < 0) {
    endIndex = 0;
  }
  const type = line.slice(0, endIndex);
  if (!type) {
    throw new LintError({
      code: 'NoCommitType',
      message: 'Please specify the type at the beginning of the message.',
    });
  }
  if (!checkString(type, config.type)) {
    throw new LintError({
      code: 'InvaildCommitType',
      message: `"${type}" is an invalid commit type.`,
    });
  }
  return { value: type, endIndex };
};

const getScope = (line: string, config: MessageConfig, fromIndex: number) => {
  let scope: string | null = null;
  let index = fromIndex;
  if (line.charCodeAt(index) === LeftParenthesis) {
    const scopeStart = index + 1;
    const scopeEnd = findIndexOfCodePoint(line, isEndOfScope, scopeStart);
    if (scopeEnd < 0) {
      throw new LintError({
        code: 'UnclosedParenthesis',
        message: 'Please add ")" to the end of the scope.',
      });
    }
    scope = line.slice(scopeStart, scopeEnd);
    if (!checkString(scope, config.scope)) {
      throw new LintError({
        code: 'InvaildCommitScope',
        message: `"${scope}" is an invalid commit scope.`,
      });
    }
    index = scopeEnd + 1;
  }
  return { value: scope, endIndex: index };
};

const findIndexOfCodePoint = (
  source: string,
  test: (codePoint: number) => boolean,
  index = 0,
) => {
  const { length } = source;
  while (index < length) {
    const codePoint = source.codePointAt(index);
    if (typeof codePoint !== 'number') {
      break;
    }
    if (test(codePoint)) {
      return index;
    }
    index += 0x10000 < codePoint ? 2 : 1;
  }
  return -1;
};
