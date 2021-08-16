function getCaesarDict() {
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	return alphabet.reduce((prev, cur, index) => {
		prev[cur] = index;
		return prev;
	}, {});
}

const caesarDict = getCaesarDict();

function getNumArrFromText(text) {
	return [...text].map(char => {
		if (caesarDict[char] !== 0 && !caesarDict[char]) return char;
		return caesarDict[char];
	});
}

function getEncryptedNumArr(numArr, shift) {
	return numArr.map(num =>
		Number.isInteger(num) ? mod(num + shift, 26) : num
	);
}

function getDecryptedNumArr(numArr, shift) {
	return numArr.map(num =>
		Number.isInteger(num) ? mod(num - shift, 26) : num
	);
}

function getKey(obj, val) {
	return Object.keys(obj).find(key => obj[key] === val);
}

function mod(n, m) {
	return ((n % m) + m) % m;
}

function getTextFromNumArr(numArr) {
	return numArr
		.map(num => (Number.isInteger(num) ? getKey(caesarDict, num) : num))
		.join('');
}

const caesarCipher = {
	encrypt: (text, shift) => {
		const numArr = getNumArrFromText(text);
		const shiftedNum = getEncryptedNumArr(numArr, shift);
		const result = getTextFromNumArr(shiftedNum);
		return result;
	},
	decrypt: (text, shift) => {
		const numArr = getNumArrFromText(text);
		const shiftedNum = getDecryptedNumArr(numArr, shift);
		const result = getTextFromNumArr(shiftedNum);
		return result;
	},
};

module.exports = caesarCipher;
