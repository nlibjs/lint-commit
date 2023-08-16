import ava from 'ava';
import { checkString } from './checkString.mjs';

interface Case {
  input: Parameters<typeof checkString>;
  expected: boolean;
}
const cases: Array<Case> = [
  {
    input: ['foo', ['foo', 'bar']],
    expected: true,
  },
  {
    input: ['bar', ['foo', 'bar']],
    expected: true,
  },
  {
    input: ['baz', ['foo', 'bar']],
    expected: false,
  },
  {
    input: ['foo', (value: string) => value === 'foo'],
    expected: true,
  },
  {
    input: ['bar', (value: string) => value === 'foo'],
    expected: false,
  },
  {
    input: ['fo', /^fo+$/],
    expected: true,
  },
  {
    input: ['foo', /^fo+$/],
    expected: true,
  },
  {
    input: ['fooo', /^fo+$/],
    expected: true,
  },
  {
    input: ['fooo ', /^fo+$/],
    expected: false,
  },
];

for (const { input, expected } of cases) {
  ava(`${input.join(',')} → ${expected}`, (t) => {
    t.is(checkString(...input), expected);
  });
}
