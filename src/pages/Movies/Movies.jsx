import movies from "../../data/movies";
import MovieCard from "../../components/MovieCard/MovieCard";


function Movies() {


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
            />

          ))
        }


      </div>


    </div>

  );

}


export default Movies;