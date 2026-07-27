import "./Home.css";

import HeroSlider from "../../components/HeroSlider/HeroSlider";
import MovieSection from "../../components/MovieSection/MovieSection";

import { movies } from "../../data/movies";


function Home() {


  return (

    <div className="home">


      {/* Hero - Full Width */}
      <HeroSlider />



      {/* All Home Sections */}
      <main className="home-container">


        <MovieSection

          title="Popular Movies"

          movies={movies}

        />


      </main>


    </div>

  );

}


export default Home;