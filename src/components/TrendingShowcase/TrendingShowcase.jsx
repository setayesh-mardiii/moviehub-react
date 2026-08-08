
import "./TrendingShowcase.css";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaStar } from "react-icons/fa";

import moviesData from "../../Data/movies.json";

import { getTrendingMovies } from "../../utils/movieFilters";

function TrendingShowcase() {
  const [movies, setMovies] = useState(
    getTrendingMovies(moviesData)
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleMovieClick = (index) => {
    const newMovies = [...movies];

    [
      newMovies[0],
      newMovies[index],
    ] = [
      newMovies[index],
      newMovies[0],
    ];

    setMovies(newMovies);
  };

  const featuredMovie = movies[0];

  return (
    <section className="trending-showcase">

      <h2>
        Trending Now
      </h2>

      {loading ? (

        <div className="trending-skeleton-container">

          {/* FEATURED SKELETON */}

          <div className="trending-featured-skeleton">

            <div className="trending-featured-image-skeleton"></div>

            <div className="trending-featured-info-skeleton">

              <div className="trending-title-skeleton"></div>

              <div className="trending-text-skeleton"></div>

              <div className="trending-text-skeleton"></div>

              <div className="trending-text-skeleton short"></div>

              <div className="trending-meta-skeleton">

                <div></div>
                <div></div>
                <div></div>

              </div>

            </div>

          </div>

          {/* SMALL MOVIES SKELETON */}

          <div className="small-movies-skeleton">

            {Array.from({ length: 4 }).map((_, index) => (

              <div
                className="small-movie-skeleton"
                key={index}
              ></div>

            ))}

          </div>

        </div>

      ) : (

        <div className="trending-container">

          <AnimatePresence mode="wait">

            <motion.div

              key={featuredMovie.id}

              className="featured-movie"

              initial={{
                opacity: 0,
                scale: 0.95,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 1.05,
              }}

              transition={{
                duration: 0.45,
              }}

            >

              <div className="featured-image-wrapper">

                <img
                  className="featured-bg"
                  src={featuredMovie.image}
                  alt=""
                />

                <img
                  className="featured-main-image"
                  src={featuredMovie.image}
                  alt={featuredMovie.title}
                />

              </div>

              <div className="featured-info">

                <h3>
                  {featuredMovie.title}
                </h3>

                <p>
                  {featuredMovie.description}
                </p>

                <div className="featured-meta">

                  <span>
                    <FaStar />
                    {featuredMovie.rating}
                  </span>

                  <span>
                    {featuredMovie.year}
                  </span>

                  <span>
                    {featuredMovie.genre}
                  </span>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          <div className="small-movies">

            {movies.slice(1).map((movie, index) => (

              <motion.div

                key={movie.id}

                className="small-movie"

                onClick={() =>
                  handleMovieClick(index + 1)
                }

                whileHover={{
                  scale: 1.05,
                  x: -8,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                transition={{
                  duration: 0.25,
                }}

              >

                <img
                  src={movie.image}
                  alt={movie.title}
                />

              </motion.div>

            ))}

          </div>

        </div>

      )}

    </section>
  );
}

export default TrendingShowcase;

