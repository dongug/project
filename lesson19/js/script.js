'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lastMovie = prompt('Один из последних просмотренных фильмов?'),
	lastMovieRate = prompt('На сколько оцените его?');

const lastMovie2 = prompt('Один из последних просмотренных фильмов?'),
	lastMovieRate2 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastMovie] = lastMovieRate;
personalMovieDB.movies[lastMovie2] = lastMovieRate2;

// personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?')] = prompt('На сколько оцените его?');
// personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?')] = prompt('На сколько оцените его?');

console.log(personalMovieDB);