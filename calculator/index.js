const calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	divide: (a, b) => Math.round((a / b + Number.EPSILON) * 100) / 100,
	mutiply: (a, b) => a * b,
};

module.exports = calculator;
