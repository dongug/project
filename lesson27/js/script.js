'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
// personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?')] = prompt('На сколько оцените его?');
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

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы - классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}


console.log(personalMovieDB);