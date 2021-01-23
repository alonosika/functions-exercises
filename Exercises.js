//Question 1
function myReverse(str) {
	let out = "";
	str = str.toString(10);
	for (let i = str.length - 1; i >= 0; i--) {
		out += str[i];
	}
	return out;
}

//Question 2
function allCombinations(str) {
	let combinations = [];
	let temp = "";
	for (let i = 0; i < str.length; i++) {
		temp = "";
		for (let j = i; j < str.length; j++) {
			temp += str[j];
			combinations.push(temp);
		}
	}
	return combinations;
}

//Question 3
function allCaps(str) {
	// your code here

	let out = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		if (str[i - 1] === " ") {
			out += str[i].toUpperCase();
		} else {
			out += str[i];
		}
	}
	return out;
}

//Question 4
function myPower(x, n) {
	let ans = 1;
	for (let i = 0; i < n; i++) {
		ans *= x;
	}
	return ans;
}

//Question 5
function getFirstNotRepeating(str) {
	let exist = true;
	for (let i = 0; i < str.length; i++) {
		exist = true;
		for (let j = 0; j < str.length; j++) {
			if (str[i] === str[j] && i !== j) {
				exist = false;
			}
		}
		if (exist) {
			return str[i];
		}
	}
	return "Not Found";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	return num === sum;
}


// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
