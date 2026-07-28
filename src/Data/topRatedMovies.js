import { movies } from "./Movies";


export const topRatedMovies = movies.filter((movie) => {

  return movie.rating >= 8.5;

});