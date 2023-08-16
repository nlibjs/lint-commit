import type { StringMatcher } from './types.mjs';

export const checkString = (input: string, matcher: StringMatcher): boolean => {
  if (typeof matcher === 'function') {
    return matcher(input);
  }
  if (Array.isArray(matcher)) {
    return matcher.includes(input);
  }
  return matcher.test(input);
};
