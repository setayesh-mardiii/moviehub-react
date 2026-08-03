import "./MovieSection.css";

import MovieCard from "../MovieCard/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";

import { Link } from "react-router-dom";

import {
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import "swiper/css";



function MovieSection({

  title,

  movies,

  activeMovie,

  setActiveMovie

}) {



  const swiperRef = useRef(null);




  return (

    <section className="movie-section">



      <div className="section-header">


        <h2>

          {title}

        </h2>



        <Link

          to="/movies"

          className="view-all-btn"

        >

          مشاهده همه

          <FaChevronLeft />

        </Link>


      </div>






      <div className="movie-slider-wrapper">


        <Swiper


          onSwiper={(swiper)=>{

            swiperRef.current = swiper;

          }}



          allowTouchMove={true}


          simulateTouch={true}


          preventClicks={false}


          preventClicksPropagation={false}


          touchStartPreventDefault={false}


          touchMoveStopPropagation={false}





          breakpoints={{



            0:{


              slidesPerView:2,

              spaceBetween:12


            },



            768:{


              slidesPerView:3,

              spaceBetween:16


            },



            1200:{


              slidesPerView:5,

              spaceBetween:18


            }



          }}



          className="movie-slider"


        >



          {


            movies.map((movie)=>(



              <SwiperSlide key={movie.id}>


                <MovieCard


                  movie={movie}



                  showInfo={

                    activeMovie === movie.id

                  }



                  setShowInfo={()=>{


                    setActiveMovie(movie.id);


                  }}



                  closeInfo={()=>{


                    setActiveMovie(null);


                  }}



                />


              </SwiperSlide>


            ))


          }



        </Swiper>


      </div>







      <div className="slider-buttons">



        <button


          className="slider-btn"


          onClick={()=>


            swiperRef.current?.slidePrev()

          }


        >

          <FaChevronRight />

        </button>





        <button


          className="slider-btn"


          onClick={()=>


            swiperRef.current?.slideNext()

          }


        >

          <FaChevronLeft />

        </button>



      </div>



    </section>

  );

}



export default MovieSection;