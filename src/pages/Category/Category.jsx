import "./Category.css";

import { useParams } from "react-router-dom";

import { movies } from "../../Data/Movies";

import MovieCard from "../../components/MovieCard/MovieCard";

import { FaFilm } from "react-icons/fa";



function Category() {


  const { genre } = useParams();



  const filteredMovies = movies.filter((movie) => {

    return movie.genre.includes(genre);

  });



  const hasMovies = filteredMovies.length > 0;



  return (


    <div className="category-page">



      <h1>

        {genre}

      </h1>





      {

        hasMovies ? (



          <div className="category-movies">


            {

              filteredMovies.map((movie)=>(


                <MovieCard

                  key={movie.id}

                  movie={movie}

                />


              ))

            }


          </div>



        ) : (



          <div className="empty-category">


            <FaFilm />


            <p>

              No movies found in this genre

            </p>


          </div>



        )

      }



    </div>


  );

}



export default Category;