import { useParams } from "react-router-dom";

import {
  FaStar,
  FaFilm,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaUserTie,
  FaUsers
} from "react-icons/fa";

import { movies } from "../../Data/Movies";

import "./MovieDetails.css";


function MovieDetails() {


  const { id } = useParams();


  const movie = movies.find(
    (item) => item.id === Number(id)
  );



  if (!movie) {

    return (

      <div className="movie-details" dir="rtl">

        <h1>
          فیلم پیدا نشد
        </h1>

      </div>

    );

  }



  return (

    <div className="movie-details" dir="rtl">


      <div className="movie-details-container">


        {/* پوستر */}

        <img

          src={movie.image}

          alt={movie.title}

          className="movie-poster"

        />



        {/* اطلاعات فیلم */}

        <div className="movie-info">


          <h1>
            {movie.title}
          </h1>



          <p className="description">

            {movie.description}

          </p>



          <div className="movie-meta">


            <span>

              <FaStar />

              {movie.rating}

            </span>



            <span>

              <FaFilm />

              {movie.genre}

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

              <FaGlobe />

              {movie.country || "ایران"}

            </span>



            <span>

              <FaUserTie />

              {movie.director || "نامشخص"}

            </span>



          </div>


        </div>


      </div>




      {/* بازیگران */}

      <section className="actors">


        <h2>

          <FaUsers />

          بازیگران

        </h2>



        <div className="actor-list">


          {

            movie.actors && movie.actors.length > 0 ?


            (

              movie.actors.map((actor,index)=>(


                <div

                  key={index}

                  className="actor-card"

                >

                  {actor}


                </div>


              ))

            )


            :


            (

              <p>

                اطلاعات بازیگران موجود نیست

              </p>

            )


          }


        </div>


      </section>



    </div>

  );

}



export default MovieDetails;