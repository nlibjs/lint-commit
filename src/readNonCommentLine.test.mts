import ava from 'ava';
import { readNonCommentLine } from './readNonCommentLine.mjs';

ava('read lines', (t) => {
  const reader = readNonCommentLine(
    [' # line1', 'line2', '# line3', ' line4'].join('\n'),
  );
  t.deepEqual(reader.next(), { done: false, value: 'line2' });
  t.deepEqual(reader.next(), { done: false, value: ' line4' });
  t.deepEqual(reader.next(), { done: true, value: undefined });
});
