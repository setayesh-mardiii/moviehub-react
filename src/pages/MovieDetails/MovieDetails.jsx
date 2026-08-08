import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  FaStar,
  FaFilm,
  FaCalendarAlt,
  FaClock,
  FaPlay,
  FaHeart,
  FaUsers,
} from "react-icons/fa";

import movies from "../../Data/movies.json";

import "./MovieDetails.css";

function MovieDetails() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  const movie = movies.find((item) => item.id === Number(id));
  if (loading) {
    return (
      <div className="movie-details">
        <div className="movie-details-container skeleton-container">
          <div className="poster-area">
            <div className="skeleton skeleton-poster"></div>
          </div>

          <div className="info-area">
            <div className="skeleton skeleton-title"></div>

            <div className="meta-pills">
              <div className="skeleton skeleton-pill"></div>
              <div className="skeleton skeleton-pill"></div>
              <div className="skeleton skeleton-pill"></div>
              <div className="skeleton skeleton-pill"></div>
            </div>

            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text short"></div>

            <div className="action-buttons">
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-button"></div>
              <div className="skeleton skeleton-heart"></div>
            </div>

            <section className="actors">
              <div className="skeleton skeleton-actors-title"></div>

              <div className="actor-list">
                <div className="skeleton skeleton-actor"></div>
                <div className="skeleton skeleton-actor"></div>
                <div className="skeleton skeleton-actor"></div>
                <div className="skeleton skeleton-actor"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="movie-details" dir="rtl">
        <h1>فیلم پیدا نشد</h1>
      </div>
    );
  }

  return (
    <div className="movie-details" dir="rtl">
      <div className="details-shape">
        <div className="blob-bg"></div>

        {/* POSTER */}

        <div className="poster-area">
          <img src={movie.image} alt={movie.title} />
        </div>

        {/* INFORMATION */}

        <div className="info-area">
          <h1>{movie.title}</h1>

          <div className="meta-pills">
            <span>
              <FaStar />

              {movie.rating}
            </span>

            <span>
              <FaCalendarAlt />

              {movie.year}
            </span>

            <span>
              <FaClock />

              {movie.duration}
            </span>

            <span>
              <FaFilm />

              {movie.genre}
            </span>
          </div>

          <p className="description">{movie.description}</p>

          <div className="action-buttons">
            <button className="watch-btn">
              <FaPlay />
              تماشا
            </button>

            <button className="trailer-btn">
              <FaFilm />
              تریلر
            </button>

            {/* FAVORITE */}

            <button
              className={`details-favorite-btn ${isFavorite ? "active" : ""}`}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <FaHeart />
            </button>
          </div>

          <section className="actors">
            <h2>
              <FaUsers />
              بازیگران
            </h2>

            <div className="actor-list">
              {movie.actors?.map((actor, index) => (
                <span key={index} className="actor-pill">
                  {actor}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
