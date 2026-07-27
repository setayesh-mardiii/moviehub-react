import "./Home.css";

import HeroSlider from "../../components/HeroSlider/HeroSlider";
import MovieSection from "../../components/MovieSection/MovieSection";

import { movies } from "../../data/movies";
import { latestMovies } from "../../data/latestMovies";


function Home() {


  return (

    <div className="home">


      <HeroSlider />



      <main className="home-container">


        <MovieSection

          title="Popular Movies"

          movies={movies}

        />



        <MovieSection

          title="Latest Movies"

          movies={latestMovies}

        />


      </main>


    </div>

  );

}


export default Home;