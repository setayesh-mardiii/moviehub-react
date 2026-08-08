
import "./Series.css";

import MovieCard from "../../components/MovieCard/MovieCard";

import movies from "../../Data/movies.json";

import { getSeries } from "../../utils/movieFilters";

import { useEffect, useState } from "react";

function Series() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const series = getSeries(movies);

  return (
    <section className="series-page">

      <div className="series-container">

        <div className="series-header">

          <h1>
            همه سریال‌ها
          </h1>

          <p>
            مجموعه‌ای از بهترین و جذاب‌ترین سریال‌ها برای تماشا
          </p>

        </div>


        {loading ? (

          <div className="series-grid">

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

          <div className="series-grid">

            {series.map((item) => (

              <MovieCard
                key={item.id}
                movie={item}
              />

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Series;

