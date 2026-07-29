import "./Popular.css";

import MovieCard from "../../components/MovieCard/MovieCard";

import { popularMovies } from "../../Data/popularMovies";



function Popular() {


  return (

    <section className="popular-page">


      <div className="popular-header">


        <h1>
          Popular Movies
        </h1>


        <p>
          Discover the most popular movies loved by audiences
        </p>


      </div>





      <div className="movies-grid">


        {
          popularMovies.map((movie) => (

            <MovieCard

              key={movie.id}

              movie={movie}

            />

          ))
        }


      </div>


    </section>

  );

}



export default Popular;