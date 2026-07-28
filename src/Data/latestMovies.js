import { movies } from "./Movies";


export const latestMovies = movies.filter((movie) => {

  return movie.year >= 2024;

});