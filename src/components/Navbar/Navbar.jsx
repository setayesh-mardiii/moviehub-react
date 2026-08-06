import "./Navbar.css";

import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

import { useState, useEffect, useContext, useRef } from "react";

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

  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [search, setSearch] = useState("");
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const [suggestions, setSuggestions] = useState([]);

  // ======================
  // SEARCH HISTORY
  // ======================

  const [showHistory, setShowHistory] = useState(false);

  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem("searchHistory");

    return saved ? JSON.parse(saved) : [];
  });

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // ======================
  // SCROLL
  // ======================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeSearch = (e) => {
      const desktop = desktopSearchRef.current?.contains(e.target);

      const mobile = mobileSearchRef.current?.contains(e.target);

      if (!desktop && !mobile) {
        setShowHistory(false);
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", closeSearch);

    return () => {
      document.removeEventListener("mousedown", closeSearch);
    };
  }, []);

  // ======================
  // SAVE SEARCH HISTORY
  // ======================

  const saveSearchHistory = (value) => {
    const cleanValue = value.trim();

    if (!cleanValue) return;

    setSearchHistory((prev) => {
      const updatedHistory = [
        cleanValue,

        ...prev.filter((item) => item !== cleanValue),
      ].slice(0, 5);

      localStorage.setItem(
        "searchHistory",

        JSON.stringify(updatedHistory),
      );

      return updatedHistory;
    });
  };

  // ======================
  // SEARCH ENTER
  // ======================

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim()) {
      saveSearchHistory(search);

      navigate(`/search?query=${search.trim()}`);

      setSearch("");

      setSuggestions([]);

      setShowHistory(false);
    }
  };

  // ======================
  // SEARCH CHANGE
  // ======================

  const handleSearchChange = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setSuggestions([]);

      return;
    }

    const filteredMovies = movies
      .filter((movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      })
      .slice(0, 5);

    setSuggestions(filteredMovies);
  };

  const handleSuggestionClick = (movie) => {
    saveSearchHistory(movie.title);

    navigate(`/movie/${movie.id}`);

    setSearch("");

    setSuggestions([]);

    setShowHistory(false);
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
      {/* ======================
          HAMBURGER
      ====================== */}

      <div className="mobile-menu-btn">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ======================
          LEFT ACTIONS
      ====================== */}

      <div className="left-actions">
        <div className="theme-toggle">
          <button onClick={toggleTheme}>
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <Link to="/login" className="user-btn">
          <FaUser />

          <span>Login | Register</span>
        </Link>
      </div>

      {/* ======================
          DESKTOP SEARCH
      ====================== */}

      <div className="search-box" ref={desktopSearchRef}>
        <input
          type="text"
          value={search}
          onFocus={() => {
            setShowHistory(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setShowHistory(false);
            }, 150);
          }}
         
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search movies..."
        />

        <FaSearch />

        {/* SUGGESTIONS */}

        {suggestions.length > 0 && (
          <div className="search-suggestions">
            {suggestions.map((movie) => (
              <div
                key={movie.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(movie)}
              >
                <img src={movie.image} alt={movie.title} />

                <span>{movie.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* HISTORY */}

        {showHistory && searchHistory.length > 0 && (
          <div className="search-history-box">
            <h4>آخرین جستجوها</h4>

            {searchHistory.map((item, index) => (
              <div
                key={index}
                className="history-item"
                onClick={() => {
                  navigate(`/search?query=${item}`);

                  setSearch("");

                  setShowHistory(false);
                }}
              >
                <FaSearch />

                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ======================
          LOGO + LINKS
      ====================== */}

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
          <img src={logo} alt="logo" />

          <span>
            Movie<strong>Hub</strong>
          </span>
        </div>
      </div>

      {/* ======================
          MOBILE MENU
      ====================== */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-search" ref={mobileSearchRef}>
          <input
            type="text"
            value={search}
            onFocus={() => {
              setShowHistory(true);
            }}
            onClick={() => {
              setShowHistory(true);
            }}
            onChange={(e) => handleSearchChange(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search movies..."
          />

          <FaSearch />

          {/* MOBILE SUGGESTIONS */}

          {suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map((movie) => (
                <div
                  key={movie.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(movie)}
                >
                  <img src={movie.image} alt={movie.title} />

                  <span>{movie.title}</span>
                </div>
              ))}
            </div>
          )}

          {/* MOBILE HISTORY */}

          {showHistory && searchHistory.length > 0 && (
            <div className="search-history-box">
              <h4>آخرین جستجوها</h4>

              {searchHistory.map((item, index) => (
                <div
                  key={index}
                  className="history-item"
                  onClick={() => {
                    navigate(`/search?query=${item}`);

                    setSearch("");

                    setShowHistory(false);
                  }}
                >
                  <FaSearch />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
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
