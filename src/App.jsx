import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Category from "./pages/Category/Category";

import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Popular from "./pages/Popular/Popular";
import TopRated from "./pages/TopRated/TopRated";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import GenrePage from "./pages/GenrePage/GenrePage";


// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}

        <Route path="/" element={<Home />} />

        {/* Movies */}

        <Route path="/movies" element={<Movies />} />

        {/* Series */}

        <Route path="/series" element={<Series />} />

        {/* Popular Movies */}

        <Route path="/popular" element={<Popular />} />

        {/* Top Rated */}

        <Route path="/top-rated" element={<TopRated />} />

        {/* Search */}

        <Route path="/search" element={<Search />} />

        {/* Movie Details */}

        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Genres */}

        <Route path="/genres" element={<GenrePage />} />

        {/* Category with genre */}

        <Route path="/genres/:genre" element={<Category />} />

        {/* Login */}

        <Route path="/login" element={<Login />} />

        {/* Register */}

        <Route path="/register" element={<Register />} />

        {/* About */}

        <Route path="/about" element={<About />} />

        {/* 404 */}

        <Route
          path="*"
          element={<h1 style={{ marginTop: "100px" }}>Page Not Found</h1>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
