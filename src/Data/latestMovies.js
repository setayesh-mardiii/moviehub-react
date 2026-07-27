import { movies } from "./movies";


export const latestMovies = movies.filter((movie) => {

  return movie.year >= 2024;

});