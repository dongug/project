'use strict';

let numberOfFilms;
let personalMovieDB = {};

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
	personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false
	};
}

start();




// personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?')] = prompt('На сколько оцените его?');


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		// personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?')] = prompt('На сколько оцените его?');
    
		// prompt('да или нет?');
		let lastMovie = prompt('Один из последних просмотренных фильмов?');
		let lastMovieRate = prompt('На сколько оцените его?');
		let isLongerMovie = lastMovie.length > 50;
		let isLongerRate = lastMovieRate.length > 50;
		if (!isLongerMovie && !isLongerRate && lastMovie && lastMovieRate) {
			personalMovieDB.movies[lastMovie] = lastMovieRate;
		} else {
			i--;
		}
	}
}

rememberMyFilms();



function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы - классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();
console.log(personalMovieDB.genres);