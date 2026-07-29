import "./Popular.css";

import MovieCard from "../../components/MovieCard/MovieCard";

import { popularMovies } from "../../Data/popularMovies";



function Popular() {


  return (

    <section className="popular-page">


      <div className="popular-container">


        <div className="popular-header">


          <h1>
            فیلم‌های محبوب
          </h1>


          <p>
            محبوب‌ترین فیلم‌هایی که بیشترین توجه و امتیاز را از کاربران گرفته‌اند
          </p>


        </div>




        <div className="movies-grid">


          {
            popularMovies.map((movie)=>(

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


export default Popular;