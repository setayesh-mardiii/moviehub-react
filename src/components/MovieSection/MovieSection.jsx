
import "./MovieSection.css";

import MovieCard from "../MovieCard/MovieCard";


function MovieSection({ title, movies }) {

  return (

    <section className="movie-section">

      <h2>
        {title}
      </h2>


      <div className="movie-container">

        {
          movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))
        }

      </div>


    </section>

  );

}


export default MovieSection;