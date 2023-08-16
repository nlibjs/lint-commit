import { parseSubjectLine } from './parseSubjectLine.mjs';
import { readNonCommentLine } from './readNonCommentLine.mjs';
import type { ParseMessageResult, MessageConfig } from './types.mjs';

export const parseMessage = (
  message: string,
  messageConfig: Partial<MessageConfig & { eol: string }> = {},
): ParseMessageResult => {
  const lineReader = readNonCommentLine(message);
  const result = parseSubjectLine(lineReader.next().value || '', messageConfig);
  result.body = [...lineReader].join(messageConfig.eol || '\n').trim();
  return result;
};
