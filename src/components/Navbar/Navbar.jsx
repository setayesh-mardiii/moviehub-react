import "./Navbar.css";

import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { FaUser, FaSearch, FaMoon, FaSun } from "react-icons/fa";

import { ThemeContext } from "../../context/ThemeContext";

import logo from "../../assets/images/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      {/* سمت چپ */}

      <div className="left-actions">
        <div className="theme-toggle">
          <button onClick={toggleTheme}>
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <Link to="/login" className="user-btn">
          <FaUser />
          Login | Register
        </Link>
      </div>
      {/* سرچ وسط */}

      <div className="search-box">
        <input type="text" placeholder="Search movies..." />

        <FaSearch />
      </div>

      {/* سمت راست */}

      <div className="nav-content">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/movies">Movies</Link>
          </li>

          <li>
            <Link to="/series">Series</Link>
          </li>

          <li>
            <Link to="/genres">Genres</Link>
          </li>

          <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <div className="logo">
          <img src={logo} alt="logo" />

          <span>
            Movie<strong>Hub</strong>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
