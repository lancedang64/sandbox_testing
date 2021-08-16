export default function analyze(arr) {
	if (arr.length === 0)
		return {
			average: null,
			min: null,
			max: null,
			length: 0,
		};
	return {
		average: arr.reduce((prev, cur) => prev + cur, 0) / arr.length,
		min: arr.reduce((prev, cur) => Math.min(prev, cur)),
		max: arr.reduce((prev, cur) => Math.max(prev, cur)),
		length: arr.length,
	};
}
