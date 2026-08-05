import { useParams } from "react-router-dom";

import {
  FaStar,
  FaFilm,
  FaCalendarAlt,
  FaClock,
  FaPlay,
  FaHeart,
  FaUsers
} from "react-icons/fa";

import movies from "../../Data/movies.json";

import "./MovieDetails.css";


function MovieDetails() {


  const { id } = useParams();



  const movie = movies.find(
    item => item.id === Number(id)
  );





  if (!movie) {

    return (

      <div
        className="movie-details"
        dir="rtl"
      >

        <h1>
          فیلم پیدا نشد
        </h1>

      </div>

    );

  }







  return (


    <div
      className="movie-details"
      dir="rtl"
    >





      <div className="details-shape">





        {/* BLOB BACKGROUND */}

        <div className="blob-bg"></div>







        {/* POSTER */}


        <div className="poster-area">


          <img

            src={movie.image}

            alt={movie.title}

          />


        </div>









        {/* INFORMATION */}



        <div className="info-area">



          <h1>

            {movie.title}

          </h1>







          <div className="meta-pills">



            <span>

              <FaStar />

              {movie.rating}

            </span>





            <span>

              <FaCalendarAlt />

              {movie.year}

            </span>





            <span>

              <FaClock />

              {movie.duration}

            </span>





            <span>

              <FaFilm />

              {movie.genre}

            </span>



          </div>









          <p className="description">


            {movie.description}


          </p>









          <div className="action-buttons">



            <button className="watch-btn">


              <FaPlay />

              تماشا


            </button>







            <button className="trailer-btn">


              <FaFilm />

              تریلر


            </button>








            <button className="favorite-btn">


              <FaHeart />


            </button>



          </div>









          <section className="actors">



            <h2>

              <FaUsers />

              بازیگران

            </h2>







            <div className="actor-list">



              {

                movie.actors?.map(

                  (actor,index)=>(


                    <span

                      key={index}

                      className="actor-pill"

                    >

                      {actor}

                    </span>


                  )

                )

              }



            </div>






          </section>








        </div>







      </div>







    </div>


  );

}



export default MovieDetails;