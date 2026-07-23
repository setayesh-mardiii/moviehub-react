

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search.";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Category from "./pages/Category/Category";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="/category/:genre" element={<Category />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;