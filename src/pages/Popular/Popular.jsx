
import "./Popular.css";

import { useState, useEffect } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";

import movies from "../../Data/movies.json";

import { getPopularMovies } from "../../utils/movieFilters";

function Popular() {
  const [loading, setLoading] = useState(true);

  const popularMovies = getPopularMovies(movies);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="popular-page">
      <div className="popular-container">

        <div className="popular-header">
          <h1>
            فیلم‌های محبوب
          </h1>

          <p>
            محبوب‌ترین فیلم‌هایی که بیشترین توجه و امتیاز را از کاربران گرفته‌اند
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
            {popularMovies.map((movie) => (
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

export default Popular;

