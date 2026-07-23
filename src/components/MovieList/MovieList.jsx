
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieList() {
  return (
    <div className="movie-list">

      <MovieCard />
      <MovieCard />
      <MovieCard />

    </div>
  );
}

export default MovieList;