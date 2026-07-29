import { movies } from "./Movies";


export const series = movies.filter((movie)=>{

  return (
    movie.genre.includes("درام") ||
    movie.genre.includes("تاریخی") ||
    movie.genre.includes("جنایی") ||
    movie.genre.includes("اجتماعی")
  );

});