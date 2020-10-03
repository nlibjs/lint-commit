import {parseSubjectLine} from './parseSubjectLine';
import {readNonCommentLine} from './readNonCommentLine';
import {ParseMessageError, ParseMessageResult, MessageConfig} from './types';

export const parseMessage = (
    message: string,
    messageConfig: Partial<MessageConfig & {eol: string}> = {},
): ParseMessageResult | ParseMessageError => {
    const lineReader = readNonCommentLine(message);
    const result = parseSubjectLine(lineReader.next().value || '', messageConfig);
    if (result.error) {
        return result;
    }
    result.body = [...lineReader].join(messageConfig.eol || '\n').trim();
    return result;
};
