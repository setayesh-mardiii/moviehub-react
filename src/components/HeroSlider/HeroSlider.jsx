import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";

import "swiper/css/effect-fade";

import "swiper/css/pagination";

import "./HeroSlider.css";

import { heroMovies } from "../../Data/heroMovies";

function HeroSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="hero-wrapper">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="hero-slider"
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={1500}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,

          disableOnInteraction: false,
        }}
      >
        {heroMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${movie.image})`,
              }}
            >
              <div className="overlay"></div>

              <div className="slide-content">
                <h1>{movie.title}</h1>

                <p>{movie.description}</p>

                <button>مشاهده تریلر</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* HERO CUSTOM ARROWS */}

      <button
        className="hero-slider-btn prev"
        onClick={() => {
          swiperRef.current.params.speed = 500;

          swiperRef.current.slidePrev();
        }}
      >
        <FaChevronLeft />
      </button>

      <button
        className="hero-slider-btn next"
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
