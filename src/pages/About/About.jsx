import "./About.css";

import { Link } from "react-router-dom";

import {
  FaFilm,
  FaTv,
  FaStar,
  FaFire,
  FaMoon,
  FaTheaterMasks,
  FaGithub,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

function About() {
  return (
    <div className="about-page" dir="rtl">
      {/* =====================
              Hero
      ===================== */}
      <section className="about-hero">
        <span className="hero-tag">درباره مووی‌هاب</span>

        <h1>
          دنیای فیلم و سریال
          <br />
          همیشه در کنار شما
        </h1>

        <p>
          مووی‌هاب یک پروژه React است که برای نمایش فیلم‌ها و سریال‌ها با رابط
          کاربری مدرن، طراحی واکنش‌گرا و تجربه کاربری روان توسعه داده شده است.
        </p>
      </section>
      {/* =====================
            داستان پروژه
      ===================== */}
      <section className="about-story">
        <div className="section-title">
          <h2>داستان مووی‌هاب</h2>

          <span></span>
        </div>

        <p>
          مووی‌هاب یک پروژه فرانت‌اند است که با استفاده از React و Vite توسعه
          داده شده است.
          <br />
          <br />
          اطلاعات فیلم‌ها و سریال‌ها به صورت محلی داخل فایل‌های JSON مدیریت
          می‌شوند و منطق فیلتر، دسته‌بندی و پردازش داده‌ها توسط Utility
          Functions انجام می‌شود.
          <br />
          <br />
          هدف این پروژه تمرین معماری صحیح React، ساخت کامپوننت‌های قابل استفاده
          مجدد، طراحی رابط کاربری حرفه‌ای و ایجاد یک نمونه‌کار واقعی بوده است.
        </p>
      </section>
      id="w9k3qd"
      {/* =====================
              امکانات سایت
      ===================== */}
      <section className="about-features">
        <div className="section-title">
          <h2>امکانات سایت</h2>

          <span></span>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaFilm />
            </div>

            <h3>فیلم‌ها</h3>

            <p>
              نمایش اطلاعات فیلم‌ها شامل ژانر، امتیاز، سال انتشار، کشور، مدت
              زمان و بازیگران
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaTv />
            </div>

            <h3>سریال‌ها</h3>

            <p>نمایش مجموعه‌ای از سریال‌ها و دسته‌بندی آن‌ها</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaStar />
            </div>

            <h3>فیلم‌های برتر</h3>

            <p>نمایش فیلم‌هایی با بالاترین امتیاز کاربران</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaFire />
            </div>

            <h3>Trending Movies</h3>

            <p>نمایش فیلم‌های محبوب و پرطرفدار در بخش Trending</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaMoon />
            </div>

            <h3>Dark / Light Theme</h3>

            <p>تغییر حالت ظاهری سایت بین تم تاریک و روشن</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaTheaterMasks />
            </div>

            <h3>Explore Genres</h3>

            <p>پیدا کردن فیلم‌ها بر اساس ژانرهای مختلف</p>
          </div>
        </div>
      </section>
      {/* =====================
          تکنولوژی‌های استفاده شده
      ===================== */}
      <section className="about-tech">
        <div className="section-title">
          <h2>تکنولوژی‌های استفاده شده</h2>

          <span></span>
        </div>

        <div className="tech-grid">
          <div className="tech-card">React</div>

          <div className="tech-card">Vite</div>

          <div className="tech-card">JavaScript ES6+</div>

          <div className="tech-card">CSS3</div>

          <div className="tech-card">React Router</div>

          <div className="tech-card">Framer Motion</div>

          <div className="tech-card">Swiper.js</div>

          <div className="tech-card">JSON Data</div>

          <div className="tech-card">LocalStorage</div>

          <div className="tech-card">Git & GitHub</div>
        </div>
      </section>
      {/* =====================
           توسعه‌دهنده پروژه
      ===================== */}
      <section className="about-developer">
        <div className="section-title">
          <h2>توسعه‌دهنده پروژه</h2>

          <span></span>
        </div>

        <div className="developer-card">
          <div className="developer-avatar">
            <FaUserCircle />
          </div>

          <h3>ستایش مردی</h3>

          <p>Front-End Developer</p>

          <p className="developer-text">
            این پروژه با React و Vite توسعه داده شده و هدف آن تمرین مفاهیم مدرن
            فرانت‌اند، معماری کامپوننت‌محور و ساخت یک نمونه‌کار حرفه‌ای بوده
            است.
          </p>

          <div className="developer-buttons">
            <a
              href="https://github.com/setayesh-mardiii"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mardisetayesh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>
      </section>
      {/* =====================
              CTA
      ===================== */}
      <section className="about-cta">
        <h2>آماده‌ای دنیای فیلم و سریال را کشف کنی؟</h2>

        <p>
          هزاران فیلم و سریال محبوب با اطلاعات کامل فقط با چند کلیک در دسترس
          توست.
        </p>

        <Link to="/movies" className="cta-btn">
          مشاهده فیلم‌ها
        </Link>
      </section>
    </div>
  );
}

export default About;
