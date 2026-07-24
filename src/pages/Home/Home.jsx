import "./Home.css";

import HeroSlider from "../../components/HeroSlider/HeroSlider";
import MovieSection from "../../components/MovieSection/MovieSection";

import { movies } from "../../data/movies";


function Home() {

  return (

    <>

      <HeroSlider />

      <MovieSection
        title="فیلم‌های محبوب"
        movies={movies}
      />

    </>

  );

}


export default Home;