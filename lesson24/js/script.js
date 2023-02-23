'use strict';

function firstTask() {
	let number = 5;
	do {
		console.log(number);
		number++;
	} while (number <= 10);
}

firstTask();

function secondTask() {
	for (let i = 20; i >= 10; i--) {
		if (i === 13) {
			break;
		}
		console.log(i);
	}
}

secondTask();

function thirdTask() {
	for (let i = 2; i <= 10; i += 2) {
		console.log(i);
	}
}

thirdTask();

function fourthTask() {
	let i = 2;
	while (i <= 16) {
		
		if (i % 2 === 0) {
			i++;
			continue;
		} else {
			console.log(i);
			i++;
		}
	}
}

fourthTask();

function fifthTask() {
	let arr = [];
	let j = 0;
	for (let i = 5; i <= 10; i++) {
		arr[j] = i;
		j++;
	}
	console.log(arr);
}

fifthTask();