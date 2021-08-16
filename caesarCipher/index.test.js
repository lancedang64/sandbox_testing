const caesarCipher = require('./index');
const { test, expect } = require('@jest/globals');

test('happy path encrypt', () => {
	expect(caesarCipher.encrypt('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
		'bcdefghijklmnopqrstuvwxyza'
	);
});

test('happy path decrypt', () => {
	expect(caesarCipher.decrypt('bcdefghijklmnopqrstuvwxyza', 1)).toBe(
		'abcdefghijklmnopqrstuvwxyz'
	);
});

test('encrypt a sentence with shift key of 1', () => {
	expect(caesarCipher.encrypt('defend the east wall of the castle', 1)).toBe(
		'efgfoe uif fbtu xbmm pg uif dbtumf'
	);
});

test('decrypt a sentence with shift key of 17', () => {
	expect(caesarCipher.decrypt('uvwveu kyv vrjk nrcc fw kyv trjkcv', 17)).toBe(
		'defend the east wall of the castle'
	);
});

test('encrypt a sentence with shift key of 11 with punctuation', () => {
	expect(
		caesarCipher.encrypt('defend, the, east, wall. of the castle!', 11)
	).toBe('opqpyo, esp, plde, hlww. zq esp nldewp!');
});
