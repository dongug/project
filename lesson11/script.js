const arr = ['a', 'b', 'c'];

arr[10] = '3456';
console.log(arr[10]);
console.log(arr);

const arrObj = {
	a: 'a',
	1: 'b',
	2: 'c',
	abc: {
		df: [{}, {}],
		def: {

		}
	}
};

arrObj.b = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

console.log(arr[1]);

const obj = {
	Anna: 500,
	'Alice': 800
};