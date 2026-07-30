import "./MovieCard.css";

import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import { useEffect, useRef } from "react";


function MovieCard({

  movie,

  showInfo,

  setShowInfo,

  closeInfo

}) {


  const cardRef = useRef(null);



  useEffect(() => {


    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;



    if (!isTouchDevice) return;



    const handleOutsideClick = (event) => {


      if (

        cardRef.current &&

        !cardRef.current.contains(event.target)

      ) {

        closeInfo();

      }


    };



    document.addEventListener(

      "click",

      handleOutsideClick

    );



    return () => {


      document.removeEventListener(

        "click",

        handleOutsideClick

      );


    };


  }, [closeInfo]);






  const handleClick = (event) => {


    event.stopPropagation();



    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;



    if (isTouchDevice) {

      setShowInfo();

    }


  };





  return (


    <div


      ref={cardRef}


      className={`movie-card ${showInfo ? "show-info" : ""}`}


      onClick={handleClick}


    >



      <div className="movie-image">



        <img

          src={movie.image}

          alt={movie.title}

        />





        <div className="movie-overlay">



          <div className="movie-hover-content">



            <h3>

              {movie.title}

            </h3>





            <p>

              {movie.description}

            </p>







            <div className="movie-meta">



              <span>

                <FaStar />

                {movie.rating}

              </span>





              <span>

                {movie.year}

              </span>





              <span>

                {movie.genre}

              </span>



            </div>








            <Link


              to={`/movie/${movie.id}`}


              onClick={(e)=>e.stopPropagation()}


            >


              <button>

                مشاهده فیلم

              </button>


            </Link>





          </div>



        </div>




      </div>



    </div>


  );

}



export default MovieCard;