import "./TrendingShowcase.css";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaStar } from "react-icons/fa";


import { trendingMovies } from "../../Data/trendingMovies";



function TrendingShowcase() {



  const [movies, setMovies] = useState(trendingMovies);





  const handleMovieClick = (index) => {


    const newMovies = [...movies];


    [
      newMovies[0],
      newMovies[index]

    ] = [

      newMovies[index],
      newMovies[0]

    ];



    setMovies(newMovies);


  };






  const featuredMovie = movies[0];







  return (



    <section className="trending-showcase">





      <h2>

        Trending Now

      </h2>







      <div className="trending-container">






        <AnimatePresence mode="wait">



          <motion.div



            key={featuredMovie.id}



            className="featured-movie"




            initial={{

              opacity:0,

              scale:.95

            }}




            animate={{


              opacity:1,

              scale:1


            }}




            exit={{


              opacity:0,

              scale:1.05


            }}




            transition={{


              duration:.45


            }}



          >





            <div className="featured-image-wrapper">





              <img


                className="featured-bg"


                src={featuredMovie.image}


                alt=""


              />






              <img


                className="featured-main-image"


                src={featuredMovie.image}


                alt={featuredMovie.title}


              />





            </div>







            <div className="featured-info">





              <h3>

                {featuredMovie.title}

              </h3>






              <p>

                {featuredMovie.description}

              </p>







              <div className="featured-meta">





                <span>


                  <FaStar />


                  {featuredMovie.rating}


                </span>







                <span>

                  {featuredMovie.year}

                </span>







                <span>

                  {featuredMovie.genre}

                </span>





              </div>






            </div>







          </motion.div>






        </AnimatePresence>









        <div className="small-movies">





          {

            movies.slice(1).map((movie,index)=>(





              <motion.div



                key={movie.id}



                className="small-movie"




                onClick={()=>handleMovieClick(index + 1)}






                whileHover={{


                  scale:1.05,

                  x:-8


                }}






                whileTap={{


                  scale:.95


                }}






                transition={{


                  duration:.25


                }}



              >





                <img


                  src={movie.image}


                  alt={movie.title}


                />






              </motion.div>





            ))

          }





        </div>






      </div>






    </section>



  );

}



export default TrendingShowcase;