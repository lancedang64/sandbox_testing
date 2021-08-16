function reverseString(str) {
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i -= 1) {
		newStr += str.charAt(i);
	}
	return newStr;
}

module.exports = reverseString;
