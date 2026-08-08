
import "./TopRated.css";

import MovieCard from "../../components/MovieCard/MovieCard";

import movies from "../../Data/movies.json";

import { getTopRatedMovies } from "../../utils/movieFilters";

import { useEffect, useState } from "react";

function TopRated() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const topRatedMovies = getTopRatedMovies(movies);

  return (
    <section className="top-rated-page">

      <div className="top-rated-container">

        <div className="top-rated-header">

          <h1>
            فیلم‌های برتر
          </h1>

          <p>
            مجموعه‌ای از بالاترین امتیازهای سینما
          </p>

        </div>


        {loading ? (

          <div className="movies-grid">

            {Array.from({ length: 8 }).map((_, index) => (

              <div
                className="movie-skeleton-card"
                key={index}
              >

                <div className="movie-skeleton-image"></div>

              </div>

            ))}

          </div>

        ) : (

          <div className="movies-grid">

            {topRatedMovies.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default TopRated;

