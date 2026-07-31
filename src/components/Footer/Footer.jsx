import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaFilm,
  FaHome,
  FaVideo,
  FaThLarge,
  FaInfoCircle,
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
  FaEnvelope,
  FaCode
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>

            <FaFilm />

            <span>MovieHub</span>

          </h2>

          <p>

            بهترین تجربه تماشای فیلم و سریال

            با جدیدترین فیلم‌های ایرانی

          </p>

        </div>





        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">

            <FaHome />

            <span>Home</span>

          </Link>

          <Link to="/movies">

            <FaVideo />

            <span>Movies</span>

          </Link>

          <Link to="/genres">

            <FaThLarge />

            <span>Genres</span>

          </Link>

          <Link to="/about">

            <FaInfoCircle />

            <span>About</span>

          </Link>

        </div>





        {/* Categories */}

        <div className="footer-links">

          <h3>Categories</h3>

          <span>Comedy</span>

          <span>Drama</span>

          <span>Action</span>

          <span>Romance</span>

        </div>





        {/* Social */}

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a
              href="#"
              aria-label="Instagram"
            >

              <FaInstagram />

            </a>

            <a
              href="#"
              aria-label="Telegram"
            >

              <FaTelegramPlane />

            </a>

            <a
              href="#"
              aria-label="Github"
            >

              <FaGithub />

            </a>

            <a
              href="#"
              aria-label="Email"
            >

              <FaEnvelope />

            </a>

          </div>

        </div>

      </div>





      <div className="footer-bottom">

        <p>

          <FaCode />

          <span>

            Built with React

          </span>

        </p>

      </div>

    </footer>
  );
}

export default Footer;