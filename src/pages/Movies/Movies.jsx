import "./Movies.css";

import movies from "../../Data/movies.json";

import MovieCard from "../../components/MovieCard/MovieCard";



function Movies() {


  return (


    <section className="movies-page">


      <div className="movies-container">



        <div className="movies-header">


          <h1>

            همه فیلم‌ها

          </h1>



          <p>

            مجموعه‌ای از جدیدترین و محبوب‌ترین فیلم‌های سینمایی

          </p>



        </div>





        <div className="movies-grid">


          {

            movies.map((movie)=>(


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



export default Movies;