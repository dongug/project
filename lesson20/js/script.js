'use strict';

if (4 == 9) {
	console.log('OK');
} else {
	console.log('Error');
}

// const num = 50;

// if (num < 49) {
// 	console.log('error');
// } else if (num > 100) {
// 	console.log('много');
// } else {
// 	console.log('OK');
// }

// (num === 50) ? console.log('ok') : console.log('error');

const num = 51;

switch (num) {
case 49:
	console.log('Неверно');
	break;
case 100:
	console.log('неверно');
	break;
case 50:
	console.log('В точку!');
	break;
default:
	console.log('не в этот раз');
	break;
}