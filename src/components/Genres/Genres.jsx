import "./Genres.css";

import { genres } from "../../Data/genres";

import { Link } from "react-router-dom";


import {
  FaLaugh,
  FaTheaterMasks,
  FaHeart,
  FaGlobe,
  FaUserSecret,
  FaLandmark,
  FaSearch,
  FaVideo
} from "react-icons/fa";



function Genres() {



  const genreIcons = [

    <FaLaugh />,
    <FaTheaterMasks />,
    <FaHeart />,
    <FaGlobe />,
    <FaUserSecret />,
    <FaLandmark />,
    <FaSearch />,
    <FaVideo />

  ];





  return (

    <section className="genres-section">



      <h2>

        Explore Genres

      </h2>





      <div className="genres-container">



        {
          genres.map((genre,index)=>(



            <Link

              to={`/genres/${genre.name}`}

              className="genre-card"

              key={genre.id}

            >



              <div className="genre-icon">


                {genreIcons[index]}


              </div>





              <h3>


                {genre.name}


              </h3>





            </Link>



          ))
        }





      </div>





    </section>

  );

}



export default Genres;