import "./Home.css";

import HeroSlider from "../../components/HeroSlider/HeroSlider";
import MovieSection from "../../components/MovieSection/MovieSection";

import { movies } from "../../data/movies";
import { latestMovies } from "../../data/latestMovies";
import { topRatedMovies } from "../../data/topRatedMovies";


function Home() {


  return (

    <div className="home">


      <HeroSlider />



      <main className="home-container">


        <MovieSection

          title="Popular Movies"

          movies={movies}

          sectionClass="popular-section"

        />



        <MovieSection

          title="Latest Movies"

          movies={latestMovies}

          sectionClass="latest-section"

        />



        <MovieSection

          title="Top Rated Movies"

          movies={topRatedMovies}

          sectionClass="top-rated-section"

        />


      </main>


    </div>

  );

}


export default Home;