import {testFunction} from '@nlib/test';
import {checkString} from './checkString';

testFunction(checkString, {
    parameters: ['foo', ['foo', 'bar']],
    expected: true,
});
testFunction(checkString, {
    parameters: ['bar', ['foo', 'bar']],
    expected: true,
});
testFunction(checkString, {
    parameters: ['baz', ['foo', 'bar']],
    expected: false,
});
testFunction(checkString, {
    parameters: ['foo', (value: string) => value === 'foo'],
    expected: true,
});
testFunction(checkString, {
    parameters: ['bar', (value: string) => value === 'foo'],
    expected: false,
});
testFunction(checkString, {
    parameters: ['fo', /^fo+$/],
    expected: true,
});
testFunction(checkString, {
    parameters: ['foo', /^fo+$/],
    expected: true,
});
testFunction(checkString, {
    parameters: ['fooo', /^fo+$/],
    expected: true,
});
testFunction(checkString, {
    parameters: ['fooo ', /^fo+$/],
    expected: false,
});
