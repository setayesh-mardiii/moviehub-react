
import "./GenrePage.css";

import genres from "../../Data/genres.json";
import movies from "../../Data/movies.json";

import { Link } from "react-router-dom";

import {
  FaLaugh,
  FaTheaterMasks,
  FaHeart,
  FaGlobe,
  FaUserSecret,
  FaLandmark,
  FaSearch,
  FaVideo,
} from "react-icons/fa";

import { useEffect, useState } from "react";

function GenrePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const genreIcons = [
    <FaLaugh />,
    <FaTheaterMasks />,
    <FaHeart />,
    <FaGlobe />,
    <FaUserSecret />,
    <FaLandmark />,
    <FaSearch />,
    <FaVideo />,
  ];

  const getGenreCount = (genreName) => {
    return movies.filter((movie) =>
      movie.genre
        .split("-")
        .map((item) => item.trim())
        .includes(genreName),
    ).length;
  };

  return (
    <section className="genre-page">
      <div className="genre-page-container">

        <div className="genre-page-header">
          <h1>دسته‌بندی فیلم‌ها</h1>

          <p>
            فیلم‌ها را بر اساس ژانر مورد علاقه خود پیدا کنید
          </p>
        </div>

        {loading ? (
          <div className="genre-page-grid">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="genre-page-skeleton-card"
              >
                <div className="genre-page-skeleton-icon"></div>

                <div className="genre-page-skeleton-content">
                  <div className="genre-page-skeleton-title"></div>

                  <div className="genre-page-skeleton-count"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="genre-page-grid">
            {genres.map((genre, index) => (
              <Link
                key={genre.id}
                to={`/genres/${genre.name}`}
                className="genre-page-card"
              >
                <div className="genre-page-icon">
                  {genreIcons[index]}
                </div>

                <div className="genre-info">
                  <h3>{genre.name}</h3>

                  <span className="genre-count">
                    {getGenreCount(genre.name)} فیلم
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default GenrePage;

