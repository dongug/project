'use strict';

let num = 10;

function showFirstMessage(text) {
	console.log(text);
	let num = 20;                       //Если убрать это то будет поиск глобальной переменной
	console.log(num);
}

showFirstMessage('Hello world');

console.log(num);

function calc(a, b) {
	return a + b;
}

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

function ret() {
	let num = 50;

	return num;
}

const anothernum = ret();
console.log(anothernum);

// logger();   не сработает т.к. до объявления

let logger = function() {
	console.log('Hello');    
};

logger();

const calcul = (a, b) => {return a + b;};
console.log(calcul(5, 3));

const tripleNum = a => 3 * a;

console.log(tripleNum(4));