import "./About.css";

import {
  FaFilm,
  FaTv,
  FaStar,
  FaFire,
  FaMoon,
  FaSearch,
  FaGithub,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

function About() {
  return (
    <div className="about-page">
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
          مووی‌هاب بستری مدرن برای جستجو، کشف و مشاهده اطلاعات فیلم‌ها و
          سریال‌های روز دنیاست.
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
          مووی‌هاب یک پروژه فرانت‌اند است که با هدف یادگیری و پیاده‌سازی مفاهیم
          مدرن React ساخته شده است. در این پروژه تلاش شده محیطی سریع، واکنش‌گرا
          و کاربرپسند برای علاقه‌مندان به فیلم و سریال طراحی شود.
          <br />
          <br />
          اطلاعات فیلم‌ها و سریال‌ها از طریق TMDB API دریافت می‌شود و کاربران
          می‌توانند به راحتی فیلم‌های محبوب، برترین آثار، ژانرهای مختلف و
          اطلاعات کامل هر عنوان را مشاهده کنند.
        </p>
      </section>

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

            <p>مشاهده هزاران فیلم روز دنیا</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaTv />
            </div>

            <h3>سریال‌ها</h3>

            <p>دسترسی به مجموعه‌ای از سریال‌های محبوب</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaStar />
            </div>

            <h3>برترین آثار</h3>

            <p>مشاهده فیلم‌ها و سریال‌های با بالاترین امتیاز</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaFire />
            </div>

            <h3>محبوب‌ترین‌ها</h3>

            <p>بررسی آثار ترند و پرطرفدار</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaMoon />
            </div>

            <h3>حالت شب و روز</h3>

            <p>تغییر ظاهر سایت با یک کلیک</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaSearch />
            </div>

            <h3>جستجوی سریع</h3>

            <p>پیدا کردن فیلم و سریال در چند ثانیه</p>
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

          <div className="tech-card">React Router</div>

          <div className="tech-card">Axios</div>

          <div className="tech-card">TMDB API</div>

          <div className="tech-card">Context API</div>

          <div className="tech-card">CSS3</div>

          <div className="tech-card">Git</div>

          <div className="tech-card">GitHub</div>
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
            این پروژه با React و TMDB API با هدف یادگیری، تمرین و ساخت یک
            نمونه‌کار حرفه‌ای طراحی و توسعه داده شده است.
          </p>

          <div className="developer-buttons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
              GitHub
            </a>

            <a href="mailto:example@gmail.com">
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

        <p>هزاران فیلم و سریال محبوب فقط با چند کلیک در دسترس توست.</p>

        <a href="/movies" className="cta-btn">
          مشاهده فیلم‌ها
        </a>
      </section>
    </div>
  );
}

export default About;
