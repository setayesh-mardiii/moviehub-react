import { useState } from "react";

import { movies } from "../../Data/Movies";
import MovieCard from "../../components/MovieCard/MovieCard";


function Movies() {


  const [activeMovie, setActiveMovie] = useState(null);



  return (

    <div style={{ paddingTop: "100px" }}>


      <h1>
        Movies
      </h1>



      <div className="movies-grid">


        {
          movies.map((movie) => (

            <MovieCard

              key={movie.id}

              movie={movie}

              activeMovie={activeMovie}

              setActiveMovie={setActiveMovie}

            />

          ))
        }


      </div>


    </div>

  );

}


export default Movies;