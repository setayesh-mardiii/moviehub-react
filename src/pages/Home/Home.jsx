import "./Home.css";


import HeroSlider from "../../components/HeroSlider/HeroSlider";

import TrendingShowcase from "../../components/TrendingShowcase/TrendingShowcase";

import MovieSection from "../../components/MovieSection/MovieSection";

import Genres from "../../components/Genres/Genres";



import { movies } from "../../Data/Movies";

import { latestMovies } from "../../Data/latestMovies";

import { topRatedMovies } from "../../Data/topRatedMovies";





function Home() {



  return (



    <div className="home">



      <HeroSlider />





      <main className="home-container">





        <TrendingShowcase />







        <MovieSection


          title="Popular Movies"


          movies={movies}


        />








        <MovieSection


          title="Latest Movies"


          movies={latestMovies}


        />








        <MovieSection


          title="Top Rated Movies"


          movies={topRatedMovies}


        />








        <Genres />





      </main>





    </div>


  );

}





export default Home;