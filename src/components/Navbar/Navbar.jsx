import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/images/logo.png";


function Navbar() {


  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {


    const handleScroll = () => {


      if(window.scrollY > 50){

        setScrolled(true);

      }else{

        setScrolled(false);

      }


    };


    window.addEventListener("scroll", handleScroll);


    return () => {

      window.removeEventListener("scroll", handleScroll);

    };


  },[]);




  return (

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>


      {/* دکمه همبرگری موبایل */}

      <button

        className="menu-toggle"

        onClick={() => setMenuOpen(!menuOpen)}

      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </button>





      {/* Login Register دسکتاپ */}

      <div className="auth-buttons">


        <Link to="/login" className="login-btn">

          Login

        </Link>



        <Link to="/register" className="register-btn">

          Register

        </Link>


      </div>






      {/* منو + لوگو */}

      <div className={`nav-content ${menuOpen ? "active" : ""}`}>


        <ul className="nav-links">


          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>


          <li>
            <Link to="/movies" onClick={() => setMenuOpen(false)}>
              Movies
            </Link>
          </li>


          <li>
            <Link to="/category" onClick={() => setMenuOpen(false)}>
              Categories
            </Link>
          </li>


          <li>
            <Link to="/search" onClick={() => setMenuOpen(false)}>
              Search
            </Link>
          </li>


          <li>
            <Link to="/favorites" onClick={() => setMenuOpen(false)}>
              Favorites
            </Link>
          </li>


        </ul>





        {/* لوگو */}

        <div className="logo">


          <img src={logo} alt="logo"/>


          <span>
            Movie<strong>Hub</strong>
          </span>


        </div>






        {/* Login Register موبایل */}

        <div className="mobile-auth">


          <Link to="/login" className="login-btn">

            Login

          </Link>



          <Link to="/register" className="register-btn">

            Register

          </Link>


        </div>



      </div>


    </nav>

  );

}


export default Navbar;