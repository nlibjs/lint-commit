import {readLine} from '@nlib/global';

export const CommentLineRegExp = /^\s*#/;
export const readNonCommentLine = function* (
    message: string,
) {
    for (const line of readLine(message)) {
        if (!CommentLineRegExp.test(line)) {
            yield line;
        }
    }
};
