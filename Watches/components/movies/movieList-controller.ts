module app.movies {
    class Movie {

        constructor(public title: string, public year: number, rating?: number) {
            this.rating = rating || 0;
        }

        private myRating: number;
        set rating(value: number) {
            value = Math.min(value, MovieList.MAX_RATING);
            value = Math.max(value, 0);
            this.myRating = value;
        }

        get rating() {
            return this.myRating;
        }

    }
    export class MovieList {
        static $inject: Array<string> = [];

        constructor() {
            var movies: Array<Movie> = [];
            movies.push(new Movie("Goodfellas", 1990, 5));
            movies.push(new Movie("Casino", 1995, 5));
            movies.push(new Movie("Taxi Driver", 1976, 5));
            movies.push(new Movie("Raging Bull", 1980, 4));
            movies.push(new Movie("Gangs of New York", 2002, 3));
            this.movies = movies;
        }

        static MAX_RATING = 7;
        maxRating = MovieList.MAX_RATING;
        private movies: Movie[];
    }
}

angular.module('app').controller('movieList', app.movies.MovieList);