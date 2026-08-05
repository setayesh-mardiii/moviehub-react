export const getLatestMovies = (movies) => {
  return movies.filter((movie) => movie.year >= 2024);
};


export const getTopRatedMovies = (movies) => {
  return movies.filter((movie) => movie.rating >= 8.5);
};


export const getPopularMovies = (movies) => {
  return movies.filter((movie) => movie.rating >= 8);
};


export const getSeries = (movies) => {
  return movies.filter((movie) => {

    return (
      movie.genre.includes("درام") ||
      movie.genre.includes("تاریخی") ||
      movie.genre.includes("جنایی") ||
      movie.genre.includes("اجتماعی")
    );

  });
};


export const getTrendingMovies = (movies) => {
  return [
    movies.find((movie) => movie.id === 1),
    movies.find((movie) => movie.id === 2),
    movies.find((movie) => movie.id === 10),
    movies.find((movie) => movie.id === 26),
  ];
};