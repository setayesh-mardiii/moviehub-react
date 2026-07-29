
import "./GenrePage.css";

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



function GenrePage() {


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


    <section className="genre-page">


      <div className="genre-page-container">



        <div className="genre-page-header">


          <h1>

            دسته‌بندی فیلم‌ها

          </h1>



          <p>

            فیلم‌ها را بر اساس ژانر مورد علاقه خود پیدا کنید

          </p>


        </div>





        <div className="genre-page-grid">


          {

            genres.map((genre,index)=>(


              <Link

                key={genre.id}

                to={`/genres/${genre.name}`}

                className="genre-page-card"


              >


                <div className="genre-page-icon">

                  {genreIcons[index]}

                </div>



                <h3>

                  {genre.name}

                </h3>


              </Link>


            ))

          }


        </div>



      </div>


    </section>


  );

}



export default GenrePage;