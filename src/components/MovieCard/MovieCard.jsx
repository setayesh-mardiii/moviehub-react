
import "./MovieCard.css";


function MovieCard({ movie }) {


  return (

    <div className="movie-card">


      <div className="movie-image">


        <img 
          src={movie.image} 
          alt={movie.title}
        />


        <div className="movie-overlay">


          <button>
            مشاهده فیلم
          </button>


        </div>


      </div>



      <div className="movie-info">


        <h3>
          {movie.title}
        </h3>



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



      </div>


    </div>

  );

}


export default MovieCard;