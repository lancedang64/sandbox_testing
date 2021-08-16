const { test, expect } = require('@jest/globals');
const capitalize = require('./index');

test('happy path', () => {
	expect(capitalize('abc')).toBe('Abc');
});

test('more than 1 word', () => {
	expect(capitalize('abc def')).toBe('Abc def');
});

test('number as the first', () => {
	expect(capitalize('2bc')).toBe('2bc');
});
