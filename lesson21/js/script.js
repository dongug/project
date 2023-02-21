'use strict';

// const hamburger = 5;
// const fries = 0;   //null undefined 0 '' NaN => false

// if (hamburger && fries) {
// 	console.log('Я сыт');
// }

// console.log((hamburger && fries));


const hamburger = 3;
const fries = 3;   //null undefined 0 '' NaN => false
const cola = 0;
const nuggets = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(NaN && 'sdasdwdwasa');

// И запинается на лжи, а ИЛИ запинается на правде

// if (hamburger === 2 && cola === 1 && fries) {
// 	console.log('Все сыты');
// } else {
// 	console.log('Мы уходим');
// }

// if (hamburger || cola || fries) {
// 	console.log('Все довольны');
// } else {
// 	console.log('Мы уходим');
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

//или три гамбургера и 2 колы или 3 фри и хотя бы 1 наггетсы

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log('Все довольны');
} else {
	console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets); //другая очередность операторов
