const { expect, test } = require('@jest/globals');
const reverseString = require('./index');

test('happy path', () => {
	expect(reverseString('abcd')).toBe('dcba');
});

test('with space', () => {
	expect(reverseString('abcd efg')).toBe('gfe dcba');
});

test('With capital character', () => {
	expect(reverseString('aBcD')).toBe('DcBa');
});
