
import "./Movies.css";

import movies from "../../Data/movies.json";

import MovieCard from "../../components/MovieCard/MovieCard";

import { useEffect, useState } from "react";

function Movies() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="movies-page">
      <div className="movies-container">

        <div className="movies-header">
          <h1>همه فیلم‌ها</h1>

          <p>
            مجموعه‌ای از جدیدترین و محبوب‌ترین فیلم‌های سینمایی
          </p>
        </div>

        <div className="movies-grid">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div className="movie-skeleton-card" key={index}>
                  <div className="movie-skeleton-image"></div>
                </div>
              ))
            : movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
        </div>

      </div>
    </section>
  );
}

export default Movies;

