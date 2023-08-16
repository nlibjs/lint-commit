export const CommentLineRegExp = /^\s*#/;
export const readNonCommentLine = function* (message: string) {
  for (const line of message.split(/\r\n|\r|\n/)) {
    if (!CommentLineRegExp.test(line)) {
      yield line;
    }
  }
};
