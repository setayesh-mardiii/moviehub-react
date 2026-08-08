
import "./Genres.css";

import genres from "../../Data/genres.json";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

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

function Genres() {
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="genres-section">

      <h2>
        Explore Genres
      </h2>

      {loading ? (

        <div className="genres-container">

          {Array.from({ length: 8 }).map((_, index) => (

            <div
              className="genre-skeleton-card"
              key={index}
            >

              <div className="genre-skeleton-icon"></div>

              <div className="genre-skeleton-title"></div>

            </div>

          ))}

        </div>

      ) : (

        <div className="genres-container">

          {genres.map((genre, index) => (

            <Link
              to={`/genres/${genre.name}`}
              className="genre-card"
              key={genre.id}
            >

              <div className="genre-icon">
                {genreIcons[index]}
              </div>

              <h3>
                {genre.name}
              </h3>

            </Link>

          ))}

        </div>

      )}

    </section>
  );
}

export default Genres;

