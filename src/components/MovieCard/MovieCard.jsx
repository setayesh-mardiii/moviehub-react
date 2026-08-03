import "./MovieCard.css";

import { Link } from "react-router-dom";


function MovieCard({

  movie,

  showInfo,

  setShowInfo

}) {


  return (

    <div

      className={`movie-card ${showInfo ? "show-info" : ""}`}

      onClick={() => setShowInfo()}

    >


      <div className="movie-image">


        <img

          src={movie.image}

          alt={movie.title}

        />



        <div className="movie-overlay">


          <Link

            to={`/movie/${movie.id}`}

            onClick={(e)=>e.stopPropagation()}

          >


            <button className="details-circle">


              مشاهده جزئیات


            </button>


          </Link>


        </div>


      </div>


    </div>

  );

}



export default MovieCard;