import {parseSubjectLine} from './parseSubjectLine';
import {readNonCommentLine} from './readNonCommentLine';
import type {ParseMessageResult, MessageConfig} from './types';

export const parseMessage = (
    message: string,
    messageConfig: Partial<MessageConfig & {eol: string}> = {},
): ParseMessageResult => {
    const lineReader = readNonCommentLine(message);
    const result = parseSubjectLine(lineReader.next().value || '', messageConfig);
    result.body = [...lineReader].join(messageConfig.eol || '\n').trim();
    return result;
};
