import "./Navbar.css";

import { NavLink, Link, useLocation } from "react-router-dom";
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


function Navbar() {


  const location = useLocation();

  const isHome = location.pathname === "/";


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


        {/* Theme */}

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





        {/* User */}

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







      {/* Desktop Search */}

      <div className="search-box">


        <input

          type="text"

          placeholder="Search movies..."

        />


        <FaSearch />


      </div>








      {/* Logo + Links */}

      <div className="nav-content">



        <ul className="nav-links">


          <li>
            <NavLink to="/">Home</NavLink>
          </li>


          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>


          <li>
            <NavLink to="/series">Series</NavLink>
          </li>


          <li>
            <NavLink to="/popular">Popular</NavLink>
          </li>


          <li>
            <NavLink to="/genres">Genres</NavLink>
          </li>


          <li>
            <NavLink to="/top-rated">Top Rated</NavLink>
          </li>


          <li>
            <NavLink to="/about">About Us</NavLink>
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








      {/* Mobile Menu */}

      <div

        className={`mobile-menu ${menuOpen ? "active" : ""}`}

      >


        <div className="mobile-search">


          <input

            type="text"

            placeholder="Search movies..."

          />


          <FaSearch />


        </div>





        <NavLink onClick={closeMenu} to="/">
          Home
        </NavLink>


        <NavLink onClick={closeMenu} to="/movies">
          Movies
        </NavLink>


        <NavLink onClick={closeMenu} to="/series">
          Series
        </NavLink>


        <NavLink onClick={closeMenu} to="/popular">
          Popular
        </NavLink>


        <NavLink onClick={closeMenu} to="/genres">
          Genres
        </NavLink>


        <NavLink onClick={closeMenu} to="/top-rated">
          Top Rated
        </NavLink>


        <NavLink onClick={closeMenu} to="/about">
          About Us
        </NavLink>



      </div>



    </nav>

  );

}


export default Navbar;