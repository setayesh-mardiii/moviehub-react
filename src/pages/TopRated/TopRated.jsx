import "./TopRated.css";

import MovieCard from "../../components/MovieCard/MovieCard";

import { topRatedMovies } from "../../Data/topRatedMovies";



function TopRated() {


  return (

    <section className="top-rated-page">


      <div className="top-rated-container">


        <div className="top-rated-header">


          <h1>
            فیلم‌های برتر
          </h1>


          <p>
            مجموعه‌ای از بالاترین امتیازهای سینما
          </p>


        </div>





        <div className="movies-grid">


          {
            topRatedMovies.map((movie)=>(


              <MovieCard

                key={movie.id}

                movie={movie}

              />


            ))
          }


        </div>


      </div>


    </section>

  );

}


export default TopRated;