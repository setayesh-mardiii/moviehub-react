import "./Navbar.css";

import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import {
  FaUser,
  FaSearch,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

import logo from "../../assets/images/logo.png";

import movies from "../../Data/movies.json";


function Navbar() {


  const location = useLocation();

  const isHome = location.pathname === "/";


  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [suggestions, setSuggestions] = useState([]);



  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();





  useEffect(() => {


    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);







  const handleSearch = (e) => {


    if (
      e.key === "Enter" &&
      search.trim()
    ) {


      navigate(
        `/search?query=${search}`
      );


      setSearch("");

      setSuggestions([]);


    }


  };









  const handleSearchChange = (value) => {


    setSearch(value);




    if(!value.trim()){


      setSuggestions([]);

      return;


    }






    const filteredMovies = movies.filter(
      (movie)=>{


        return movie.title
          .toLowerCase()
          .includes(
            value.toLowerCase()
          );


      }

    ).slice(0,5);






    setSuggestions(
      filteredMovies
    );


  };









  const handleSuggestionClick = (id)=>{


    navigate(
      `/movie/${id}`
    );


    setSearch("");

    setSuggestions([]);


  };









  const closeMenu = () => {

    setMenuOpen(false);

  };









  return (



    <nav

      className={`
        navbar
        ${scrolled ? "scrolled" : ""}
        ${isHome ? "home-navbar" : ""}
      `}

    >






      <div className="mobile-menu-btn">


        <button

          onClick={()=>
            setMenuOpen(!menuOpen)
          }

        >

          {

            menuOpen

            ?

            <FaTimes />

            :

            <FaBars />

          }


        </button>


      </div>









      <div className="left-actions">



        <div className="theme-toggle">


          <button

            onClick={toggleTheme}

          >


            {

              darkMode

              ?

              <FaMoon />

              :

              <FaSun />

            }


          </button>


        </div>









        <Link

          to="/login"

          className="user-btn"

        >


          <FaUser />


          <span>

            Login | Register

          </span>


        </Link>



      </div>












      <div className="search-box">


        <input


          type="text"


          value={search}


          onChange={(e)=>
            handleSearchChange(
              e.target.value
            )
          }


          onKeyDown={handleSearch}


          placeholder="Search movies..."


        />



        <FaSearch />







        {


          suggestions.length > 0 && (


            <div className="search-suggestions">



              {


                suggestions.map((movie)=>(



                  <div


                    key={movie.id}


                    className="suggestion-item"



                    onClick={()=>
                      handleSuggestionClick(
                        movie.id
                      )
                    }


                  >


                    <img

                      src={movie.image}

                      alt={movie.title}

                    />



                    <span>

                      {movie.title}

                    </span>



                  </div>



                ))


              }



            </div>



          )


        }






      </div>












      <div className="nav-content">



        <ul className="nav-links">


          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>


          <li>
            <NavLink to="/movies">
              Movies
            </NavLink>
          </li>


          <li>
            <NavLink to="/series">
              Series
            </NavLink>
          </li>


          <li>
            <NavLink to="/popular">
              Popular
            </NavLink>
          </li>


          <li>
            <NavLink to="/genres">
              Genres
            </NavLink>
          </li>


          <li>
            <NavLink to="/top-rated">
              Top Rated
            </NavLink>
          </li>


          <li>
            <NavLink to="/about">
              About Us
            </NavLink>
          </li>


        </ul>








        <div className="logo">


          <img

            src={logo}

            alt="logo"

          />



          <span>

            Movie<strong>Hub</strong>

          </span>


        </div>




      </div>












      <div

        className={
          `mobile-menu ${
            menuOpen ? "active" : ""
          }`
        }

      >



        <div className="mobile-search">


          <input


            type="text"


            value={search}


            onChange={(e)=>
              handleSearchChange(
                e.target.value
              )
            }


            onKeyDown={handleSearch}


            placeholder="Search movies..."


          />


          <FaSearch />


        </div>







        <NavLink
          onClick={closeMenu}
          to="/"
        >
          Home
        </NavLink>


        <NavLink
          onClick={closeMenu}
          to="/movies"
        >
          Movies
        </NavLink>


        <NavLink
          onClick={closeMenu}
          to="/series"
        >
          Series
        </NavLink>


        <NavLink
          onClick={closeMenu}
          to="/popular"
        >
          Popular
        </NavLink>


        <NavLink
          onClick={closeMenu}
          to="/genres"
        >
          Genres
        </NavLink>


        <NavLink
          onClick={closeMenu}
          to="/top-rated"
        >
          Top Rated
        </NavLink>


        <NavLink
          onClick={closeMenu}
          to="/about"
        >
          About Us
        </NavLink>



      </div>





    </nav>



  );

}



export default Navbar;