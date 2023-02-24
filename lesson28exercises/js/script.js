'use strict';

// Место для первой задачи
function sayHello(username) {
	return `Привет, ${username}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(anyNumber) {
	return [anyNumber - 1, anyNumber, anyNumber + 1];
}

// Место для третьей задачи
function getMathResult(num1, count) {
	if (typeof(count) == 'number' && count > 0) {
		let result = '';
		for (let i = 1; i <= count; i++) {
			result+= num1 * i;
			if (i == count) {
				return result;
			}
			result+= '---';
		}
	} else {
		return num1;
	}
}

console.log(sayHello('Антон'));
console.log(returnNeighboringNumbers(5));
console.log(getMathResult(20, -5));