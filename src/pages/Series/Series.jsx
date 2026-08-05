import "./Series.css";

import MovieCard from "../../components/MovieCard/MovieCard";

import movies from "../../Data/movies.json";

import { getSeries } from "../../utils/movieFilters";


function Series() {


  const series = getSeries(movies);


  return (


    <section className="series-page">


      <div className="series-container">



        <div className="series-header">


          <h1>

            همه سریال‌ها

          </h1>



          <p>

            مجموعه‌ای از بهترین و جذاب‌ترین سریال‌ها برای تماشا

          </p>



        </div>





        <div className="series-grid">


          {

            series.map((item)=>(


              <MovieCard

                key={item.id}

                movie={item}

              />


            ))

          }


        </div>



      </div>


    </section>


  );

}



export default Series;