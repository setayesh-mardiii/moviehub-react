import "./Home.css";

import HeroSlider from "../../components/HeroSlider/HeroSlider";
import TrendingShowcase from "../../components/TrendingShowcase/TrendingShowcase";
import MovieSection from "../../components/MovieSection/MovieSection";
import Genres from "../../components/Genres/Genres";

import movies from "../../Data/movies.json";

import {
  getLatestMovies,
  getTopRatedMovies,
  getPopularMovies
} from "../../utils/movieFilters";


function Home() {


  return (

    <div className="home">


      <HeroSlider />


      <main className="home-container">


        <TrendingShowcase />


        <MovieSection

          title="Popular Movies"

          movies={getPopularMovies(movies)}

        />



        <MovieSection

          title="Latest Movies"

          movies={getLatestMovies(movies)}

        />



        <MovieSection

          title="Top Rated Movies"

          movies={getTopRatedMovies(movies)}

        />



        <Genres />


      </main>


    </div>

  );

}


export default Home;