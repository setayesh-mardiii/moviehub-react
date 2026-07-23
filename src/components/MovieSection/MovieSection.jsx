
import "./MovieSection.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieSection({ title }) {
  return (
    <section className="movie-section">
        
      <h2>{title}</h2>

      <div className="movie-container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>

    </section>
  );
}

export default MovieSection;