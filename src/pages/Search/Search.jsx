import "./Search.css";

import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import movies from "../../Data/movies.json";

import MovieCard from "../../components/MovieCard/MovieCard";


function Search() {


  const [searchParams] = useSearchParams();


  const query = searchParams.get("query") || "";



  const [searchHistory] = useState(() => {


    const saved = localStorage.getItem("searchHistory");


    return saved
      ? JSON.parse(saved)
      : [];


  });





  const results = movies.filter((movie) => {


    return movie.title

      .toLowerCase()

      .includes(

        query.toLowerCase()

      );


  });







  return (


    <section className="search-page">


      <div className="search-container">



        <div className="search-header">


          <h1>

            نتایج جستجو برای:

          </h1>


          <span>

            {query}

          </span>


        </div>







        {


          results.length > 0 ?



          <div className="movies-grid">


            {


              results.map((movie) => (


                <MovieCard

                  key={movie.id}

                  movie={movie}

                />


              ))


            }


          </div>




          :



          <div className="no-result">


            <h2>

              فیلمی پیدا نشد

            </h2>


          </div>


        }








        {


          searchHistory.length > 0 &&



          <div className="history">


            <h2>

              آخرین جستجوها

            </h2>



            <div>


              {


                searchHistory.map((item,index)=>(


                  <span key={index}>

                    {item}

                  </span>


                ))


              }


            </div>


          </div>


        }




      </div>


    </section>


  );

}


export default Search;