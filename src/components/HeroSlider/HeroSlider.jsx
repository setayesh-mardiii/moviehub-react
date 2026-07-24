import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./HeroSlider.css";

import im1 from "../../assets/images/im1.jpg";
import im2 from "../../assets/images/im2.jpg";
import im3 from "../../assets/images/im3.jpg";
import im4 from "../../assets/images/im4.jpg";


function HeroSlider() {

  const swiperRef = useRef(null);


  const movies = [

    {
      image: im1,
      title: "زن و بچه",
      description: "روایتی تاثیرگذار از عشق، خانواده و چالش‌های زندگی",
    },

    {
      image: im2,
      title: "گوزن‌های اتوبان",
      description: "داستانی متفاوت از آدم‌ها، انتخاب‌ها و اتفاقات زندگی",
    },

    {
      image: im3,
      title: "کفایت مذاکرات",
      description: "تجربه‌ای متفاوت از سینمای ایران با داستانی جذاب و دیدنی",
    },

    {
      image: im4,
      title: "کیمدی شو",
      description: "یک تجربه سرگرم‌کننده و متفاوت با لحظاتی پر از خنده و هیجان",
    },

  ];



  return (

    <section className="hero-wrapper">


      <Swiper

        onSwiper={(swiper) => (swiperRef.current = swiper)}

        className="hero-slider"

        modules={[Autoplay, EffectFade, Pagination]}

        effect="fade"

        fadeEffect={{
          crossFade:true
        }}

        speed={1500}

        loop={true}


        pagination={{
          clickable:true,
        }}


        autoplay={{
          delay:5000,
          disableOnInteraction:false,
        }}

      >


        {movies.map((movie,index)=>(

          <SwiperSlide key={index}>


            <div

              className="slide"

              style={{
                backgroundImage:`url(${movie.image})`,
              }}

            >

              <div className="overlay"></div>


              <div className="slide-content">

                <h1>{movie.title}</h1>

                <p>{movie.description}</p>


                <button>
                  مشاهده تریلر
                </button>


              </div>


            </div>


          </SwiperSlide>


        ))}


      </Swiper>



      <button

        className="slider-btn prev"

        onClick={() => {

          swiperRef.current.params.speed = 500;

          swiperRef.current.slidePrev();

        }}

      >

        <FaChevronLeft />

      </button>




      <button

        className="slider-btn next"

        onClick={() => {

          swiperRef.current.params.speed = 500;

          swiperRef.current.slideNext();

        }}

      >

        <FaChevronRight />

      </button>


    </section>

  );

}


export default HeroSlider;