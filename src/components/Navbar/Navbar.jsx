import "./Navbar.css";

import { Link, NavLink, useLocation } from "react-router-dom";
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
          onClick={() => setMenuOpen(!menuOpen)}
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



        <Link 
          to="/login"
          className="user-btn"
        >

          <FaUser />

          Login | Register

        </Link>


      </div>





      <div className="search-box">


        <input

          type="text"

          placeholder="Search movies..."

        />


        {/* رنگ آیکون از CSS کنترل می‌شود */}

        <FaSearch />


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
            {/* Mobile Menu */}


      <div

        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}

      >



        <div className="mobile-search">


          <input

            type="text"

            placeholder="Search movies..."

          />



          {/* رنگ آیکون از CSS کنترل می‌شود */}

          <FaSearch />


        </div>







        <NavLink

          onClick={() => setMenuOpen(false)}

          to="/"

        >

          Home

        </NavLink>





        <NavLink

          onClick={() => setMenuOpen(false)}

          to="/movies"

        >

          Movies

        </NavLink>





        <NavLink

          onClick={() => setMenuOpen(false)}

          to="/series"

        >

          Series

        </NavLink>





        <NavLink

          onClick={() => setMenuOpen(false)}

          to="/genres"

        >

          Genres

        </NavLink>





        <NavLink

          onClick={() => setMenuOpen(false)}

          to="/top-rated"

        >

          Top Rated

        </NavLink>





        <NavLink

          onClick={() => setMenuOpen(false)}

          to="/about"

        >

          About Us

        </NavLink>
              </div>



    </nav>

  );

}



export default Navbar;