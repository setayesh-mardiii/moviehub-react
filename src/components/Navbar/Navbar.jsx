import "./Navbar.css";

import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import {
  FaUser,
  FaSearch,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

import logo from "../../assets/images/logo.png";


function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useContext(ThemeContext);



  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };


    window.addEventListener("scroll", handleScroll);


    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);




  return (

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>



      {/* Hamburger */}

      <div className="mobile-menu-btn">

        <button onClick={() => setMenuOpen(!menuOpen)}>

          {
            menuOpen
            ?
            <FaTimes />
            :
            <FaBars />
          }

        </button>

      </div>





      {/* Left Actions */}

      <div className="left-actions">


        <div className="theme-toggle">

          <button onClick={toggleTheme}>

            {
              darkMode
              ?
              <FaMoon />
              :
              <FaSun />
            }

          </button>

        </div>




        <Link to="/login" className="user-btn">

          <FaUser />

          Login | Register

        </Link>


      </div>





      {/* Search */}

      <div className="search-box">

        <input 
          type="text"
          placeholder="Search movies..."
        />

        <FaSearch />

      </div>






      {/* Menu + Logo */}

      <div className="nav-content">


        <ul className="nav-links">


          <li>
            <Link to="/">
              Home
            </Link>
          </li>


          <li>
            <Link to="/movies">
              Movies
            </Link>
          </li>


          <li>
            <Link to="/series">
              Series
            </Link>
          </li>


          <li>
            <Link to="/genres">
              Genres
            </Link>
          </li>


          <li>
            <Link to="/top-rated">
              Top Rated
            </Link>
          </li>


          <li>
            <Link to="/about">
              About Us
            </Link>
          </li>


        </ul>





        <div className="logo">

          <img src={logo} alt="logo" />


          <span>
            Movie<strong>Hub</strong>
          </span>


        </div>


      </div>







      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>


        <div className="mobile-search">

          <input 
            type="text"
            placeholder="Search movies..."
          />

          <FaSearch />

        </div>




        <Link 
          onClick={() => setMenuOpen(false)}
          to="/"
        >
          Home
        </Link>


        <Link 
          onClick={() => setMenuOpen(false)}
          to="/movies"
        >
          Movies
        </Link>


        <Link 
          onClick={() => setMenuOpen(false)}
          to="/series"
        >
          Series
        </Link>


        <Link 
          onClick={() => setMenuOpen(false)}
          to="/genres"
        >
          Genres
        </Link>


        <Link 
          onClick={() => setMenuOpen(false)}
          to="/top-rated"
        >
          Top Rated
        </Link>


        <Link 
          onClick={() => setMenuOpen(false)}
          to="/about"
        >
          About Us
        </Link>





        <button 
          className="mobile-theme-btn"
          onClick={toggleTheme}
        >

          {
            darkMode
            ?
            <FaMoon />
            :
            <FaSun />
          }


          Theme


        </button>



      </div>



    </nav>

  );

}


export default Navbar;