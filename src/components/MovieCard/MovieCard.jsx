import "./MovieCard.css";
import { Link } from "react-router-dom";


function MovieCard({ movie }) {


  return (

    <div className="movie-card">


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

                ⭐ {movie.rating}

              </span>



              <span>

                {movie.year}

              </span>



              <span>

                {movie.genre}

              </span>


            </div>




            <Link to={`/movie/${movie.id}`}>

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