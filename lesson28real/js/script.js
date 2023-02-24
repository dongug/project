'use strict';

const str = 'tEst';
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));            //метод не нашел букву, возвращает -1

const logg = 'Hello world';
console.log(logg.slice(6, 11));             //11 индекс не включается
console.log(logg.slice(6));                 //до конца
console.log(logg.slice(-5, -1));

console.log(logg.substring(11, 6));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));