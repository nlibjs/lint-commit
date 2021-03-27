import * as semver from 'semver';
import type {StringMatcher} from './types';

export const ignorePatterns: Array<StringMatcher> = [
    /^Merged? /m,
    /^(R|r)evert /,
    (input) => semver.valid(input.trim()) !== null,
];
