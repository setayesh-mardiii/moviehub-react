import "./Home.css";

import { useState } from "react";

import HeroSlider from "../../components/HeroSlider/HeroSlider";
import TrendingShowcase from "../../components/TrendingShowcase/TrendingShowcase";
import MovieSection from "../../components/MovieSection/MovieSection";
import Genres from "../../components/Genres/Genres";

import { movies } from "../../Data/Movies";
import { latestMovies } from "../../Data/latestMovies";
import { topRatedMovies } from "../../Data/topRatedMovies";



function Home() {


  const [activeMovie, setActiveMovie] = useState(null);



  return (


    <div className="home">


      <HeroSlider />



      <main className="home-container">



        <TrendingShowcase />




        <MovieSection


          title="Popular Movies"


          movies={movies}


          activeMovie={activeMovie}


          setActiveMovie={setActiveMovie}


        />





        <MovieSection


          title="Latest Movies"


          movies={latestMovies}


          activeMovie={activeMovie}


          setActiveMovie={setActiveMovie}


        />





        <MovieSection


          title="Top Rated Movies"


          movies={topRatedMovies}


          activeMovie={activeMovie}


          setActiveMovie={setActiveMovie}


        />





        <Genres />



      </main>



    </div>


  );

}



export default Home;