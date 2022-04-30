// Given an integer x, return true if x is palindrome integer.

var isPalindrome = function (x) {
	let stringX = x.toString();
	let splitX = stringX.split('');

	for (let i = 0; i < splitX.length; i++) {
		console.log(splitX);

		splitX.pop();
	}

	// console.log(popX)
	// console.log(sliceX)
	// if(x < 0){
	//     return false;
	// } else if()
};