import {testFunction} from '@nlib/test';
import {checkString} from './checkString';

testFunction(checkString, ['foo', ['foo', 'bar']], true);
testFunction(checkString, ['bar', ['foo', 'bar']], true);
testFunction(checkString, ['baz', ['foo', 'bar']], false);
testFunction(checkString, ['foo', (value: string) => value === 'foo'], true);
testFunction(checkString, ['bar', (value: string) => value === 'foo'], false);
testFunction(checkString, ['fo', /^fo+$/], true);
testFunction(checkString, ['foo', /^fo+$/], true);
testFunction(checkString, ['fooo', /^fo+$/], true);
testFunction(checkString, ['fooo ', /^fo+$/], false);
