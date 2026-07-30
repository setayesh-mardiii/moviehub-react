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



          spaceBetween={18}



          breakpoints={{



            0:{

              slidesPerView:2,

            },



            768:{

              slidesPerView:3,

            },



            1200:{

              slidesPerView:5,

            }



          }}



          className="movie-slider"



        >



          {

            movies.map((movie)=>(


              <SwiperSlide key={movie.id}>


                <MovieCard

                  movie={movie}

                  showInfo={activeMovie === movie.id}

                  setShowInfo={() => setActiveMovie(movie.id)}

                />


              </SwiperSlide>


            ))

          }



        </Swiper>



      </div>








      <div className="slider-buttons">



        <button

          className="slider-btn"

          onClick={()=>swiperRef.current?.slidePrev()}

        >

          <FaChevronRight />

        </button>







        <button

          className="slider-btn"

          onClick={()=>swiperRef.current?.slideNext()}

        >

          <FaChevronLeft />

        </button>



      </div>




    </section>


  );

}



export default MovieSection;