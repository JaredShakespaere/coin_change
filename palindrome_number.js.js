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
		let joinX = newXArr.join('');
		let backwardsX = joinX;
		console.log(
			`x: ${x}, backwardsX: ${backwardsX}..... ${typeof x}, ${typeof backwardsX}`
		);

		if (backwardsX == x) {
			return 'true';
		} else {
			return 'false';
		}
};