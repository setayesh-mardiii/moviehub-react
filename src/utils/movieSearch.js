export const searchMovies = (movies, query) => {

  if (!query.trim()) {
    return [];
  }


  return movies.filter((movie)=>{

    return (
      movie.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  });

};