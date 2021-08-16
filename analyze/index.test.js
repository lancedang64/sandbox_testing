import { test, expect } from '@jest/globals';
import analyze from './index';

test('happy path: an array of unique integer', () => {
	expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test('duplicate min', () => {
	expect(analyze([1, 1, 6, 4])).toEqual({
		average: 3,
		min: 1,
		max: 6,
		length: 4,
	});
});

test('empty array', () => {
	expect(analyze([])).toEqual({
		average: null,
		min: null,
		max: null,
		length: 0,
	});
});

test('1 element array', () => {
	expect(analyze([2])).toEqual({
		average: 2,
		min: 2,
		max: 2,
		length: 1,
	});
});
