// Given an integer x, return true if x is palindrome integer.

var isPalindrome = function (x) {
	let stringX = x.toString();
	let splitX = stringX.split('');
	let newXArr = [];

	for (let i = splitX.length; i >= 0; i--) {
		if (splitX[i] !== undefined) {
			newXArr.push(splitX[i]);
		}
	}
	console.log(newXArr);
};