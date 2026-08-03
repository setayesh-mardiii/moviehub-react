import "./MovieCard.css";

import { Link } from "react-router-dom";



function MovieCard({ movie }) {


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