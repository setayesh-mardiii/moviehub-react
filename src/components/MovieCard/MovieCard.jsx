import "./MovieCard.css";

import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";

import { FavoriteContext } from "../../context/FavoriteContext";


function MovieCard({ movie }) {


  const {
    addFavorite,
    removeFavorite,
    isFavorite,

  } = useContext(FavoriteContext);



  const favorite = isFavorite(movie.id);




  const handleFavorite = (e) => {

    e.preventDefault();

    e.stopPropagation();



    if (favorite) {

      removeFavorite(movie.id);

    } else {

      addFavorite(movie);

    }

  };




  return (

    <Link

      to={`/movie/${movie.id}`}

      className="movie-card-link"

    >


      <div className="movie-card">


        <div className="movie-image">


          <img

            src={movie.image}

            alt={movie.title}

          />




          <button

            type="button"

            aria-label="Add to favorites"

            className={`favorite-btn ${
              favorite ? "active" : ""
            }`}

            onClick={handleFavorite}

          >

            <FaHeart />

          </button>




          <div className="movie-overlay">


            <div className="details-circle">

              مشاهده جزئیات

            </div>


          </div>



        </div>


      </div>


    </Link>

  );

}



export default MovieCard;