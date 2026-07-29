import { movies } from "./Movies";


export const popularMovies = movies.filter((movie) => {

  return movie.rating >= 8;

});