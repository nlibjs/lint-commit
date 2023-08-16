import { createRequire } from 'module';
import type { StringMatcher } from './types.mjs';

const semver = createRequire(import.meta.url)('semver') as unknown as {
  valid: (input: string) => string | null;
};

export const ignorePatterns: Array<StringMatcher> = [
  /^Merged? /m,
  /^(R|r)evert /,
  (input) => semver.valid(input.trim()) !== null,
];
