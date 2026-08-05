# 🎬 Movie App

A modern and responsive movie web application built with **React** and **Vite**.

---

# 📖 درباره پروژه

**Movie App** یک پروژه فرانت‌اند حرفه‌ای است که با React ساخته شده است.

هدف این پروژه ساخت یک وب‌سایت نمایش فیلم با رابط کاربری مدرن، طراحی واکنش‌گرا و ساختار حرفه‌ای کامپوننت‌ها بوده است.

تمام اطلاعات فیلم‌ها به صورت محلی داخل فایل‌های **JSON** نگهداری می‌شوند و پروژه بدون وابستگی به API خارجی طراحی شده است.

در این پروژه مفاهیم مهم توسعه فرانت‌اند مدرن مانند:

- ساخت کامپوننت‌های قابل استفاده مجدد
- مدیریت داده‌های محلی
- جداسازی Data از UI
- استفاده از Utility Functions
- طراحی Responsive
- مدیریت Theme
- ساخت صفحات مختلف

به صورت عملی پیاده‌سازی شده‌اند.

---

# 🚀 تکنولوژی‌های استفاده شده

* ⚛️ React
* ⚡ Vite
* 🟨 JavaScript (ES6+)
* 🎨 CSS3
* 📦 npm
* 🎭 Framer Motion
* 🎞 Swiper.js
* 🔗 React Router
* 📄 JSON Data Management
* 💾 LocalStorage

---

# ✨ قابلیت‌های پروژه

## 🎥 بخش فیلم‌ها

* نمایش لیست فیلم‌ها
* نمایش کارت اختصاصی فیلم‌ها
* نمایش اطلاعات کامل فیلم
* نمایش ژانر
* نمایش سال انتشار
* نمایش امتیاز
* نمایش کشور
* نمایش مدت زمان فیلم
* نمایش بازیگران

---

## 🏠 صفحه اصلی

- 🎞 Hero Slider حرفه‌ای
- 🔥 Trending Movies
- ⭐ Popular Movies
- 🆕 Latest Movies
- 🏆 Top Rated Movies
- 🎭 Explore Genres
- 🎬 صفحات جداگانه:
  - Movies
  - Series
  - Popular
  - Top Rated
  - Movie Details
  - Genres

---

## 🎨 رابط کاربری

* طراحی مدرن و مینیمال
* Responsive کامل برای موبایل، تبلت و دسکتاپ
* Dark / Light Theme
* Animation های نرم با Framer Motion
* استفاده از کامپوننت‌های قابل استفاده مجدد

---

# 🧩 ساختار کدنویسی

ویژگی‌های معماری پروژه:

* Component Based Architecture
* Reusable Components
* JSON Data Management
* Utility Functions
* Clean Folder Structure
* Separation of Data and UI

---

# 📂 ساختار پروژه

```text
project/
│
├── public/
│   └── images/
│
├── src/
│   │
│   ├── Data/
│   │   ├── movies.json
│   │   ├── heroMovies.json
│   │   └── genres.json
│   │
│   ├── components/
│   │   ├── MovieCard/
│   │   ├── HeroSlider/
│   │   ├── MovieSection/
│   │   ├── Genres/
│   │   └── TrendingShowcase/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Movies/
│   │   ├── Series/
│   │   ├── Popular/
│   │   ├── TopRated/
│   │   ├── MovieDetails/
│   │   └── Genres/
│   │
│   ├── hooks/
│   │
│   ├── utils/
│   │   └── movieFilters.js
│   │
│   ├── App.jsx
│   └── main.jsx
```

---

# 📊 مدیریت داده‌ها

تمام اطلاعات فیلم‌ها به صورت Local داخل فایل‌های JSON مدیریت می‌شوند.

ساختار دیتا:

```text
Data/
│
├── movies.json
├── heroMovies.json
└── genres.json
```

منطق پردازش و فیلتر فیلم‌ها در:

```text
utils/movieFilters.js
```

قرار دارد.

این پروژه برای دریافت اطلاعات به API خارجی وابسته نیست و تمام داده‌ها به صورت Local مدیریت می‌شوند.

---

# 🛠️ نصب و اجرا

ابتدا پروژه را Clone کنید:

```bash
git clone https://github.com/setayesh-mardiii/moviehub-react.git
```

ورود به پوشه پروژه:

```bash
cd moviehub-react
```

نصب پکیج‌ها:

```bash
npm install
```

اجرای پروژه:

```bash
npm run dev
```

---

# 🚧 وضعیت پروژه

این پروژه همچنان در حال توسعه است و امکانات جدید به مرور به آن اضافه خواهد شد.

---

# 🔮 امکانات آینده

* 🔍 جستجوی پیشرفته فیلم‌ها
* ❤️ سیستم Favorites با LocalStorage
* 👁 Recently Viewed Movies
* 🎭 فیلتر بر اساس ژانر
* 🌙 بهبود Dark / Light Theme
* ⏳ Skeleton Loading
* 📄 Pagination / Load More
* ❌ صفحه 404
* ⚡ بهینه‌سازی Performance
* 🖼 Lazy Loading تصاویر
* 🎨 Animation های بیشتر

---

# 👩‍💻 توسعه‌دهنده

**Setayesh Mardi**

GitHub:

https://github.com/setayesh-mardiii

---

⭐ اگر این پروژه برای شما مفید بود، خوشحال می‌شوم با یک Star از آن حمایت کنید.