import "./MovieCard.css";

import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";


function MovieCard({ movie, activeMovie, setActiveMovie }) {


  const showInfo = activeMovie === movie.id;



  return (

    <div

      className={`movie-card ${showInfo ? "show-info" : ""}`}


      onClick={() => {

        setActiveMovie(

          showInfo ? null : movie.id

        );

      }}


      onTouchStart={() => {

        setActiveMovie(movie.id);

      }}

    >



      <div className="movie-image">


        <img

          src={movie.image}

          alt={movie.title}

        />



        <div className="movie-overlay">


          <div className="movie-hover-content">



            <h3>

              {movie.title}

            </h3>



            <p>

              {movie.description}

            </p>



            <div className="movie-meta">


              <span>

                <FaStar />

                {movie.rating}

              </span>



              <span>

                {movie.year}

              </span>



              <span>

                {movie.genre}

              </span>



            </div>



            <Link

              to={`/movie/${movie.id}`}

              onClick={(e) => e.stopPropagation()}

            >

              <button>

                مشاهده فیلم

              </button>


            </Link>



          </div>


        </div>


      </div>


    </div>


  );

}


export default MovieCard;