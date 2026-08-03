import "./MovieCard.css";

import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";


function MovieCard({

  movie,

  showInfo,

  setShowInfo,

  closeInfo

}) {


  const cardRef = useRef(null);



  useEffect(() => {


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





  const handleCardClick = (event) => {


    event.stopPropagation();


    // فقط نمایش دایره

    setShowInfo();


  };





  return (

    <div

      ref={cardRef}

      className={`movie-card ${showInfo ? "show-info" : ""}`}

      onClick={handleCardClick}

    >


      <div className="movie-image">


        <img

          src={movie.image}

          alt={movie.title}

        />



        <div className="movie-overlay">


          <Link

            to={`/movie/${movie.id}`}

            onClick={(e)=>e.stopPropagation()}

          >


            <button className="details-circle">

              مشاهده جزئیات

            </button>


          </Link>


        </div>


      </div>


    </div>

  );

}



export default MovieCard;