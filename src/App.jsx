import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search.";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Category from "./pages/Category/Category";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {

  return (

    <BrowserRouter>

      <Navbar />


      <Routes>


        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/search" 
          element={<Search />} 
        />


        <Route 
          path="/movie/:id" 
          element={<MovieDetails />} 
        />


        <Route 
          path="/category/:genre" 
          element={<Category />} 
        />


        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/register" 
          element={<Register />} 
        />


      </Routes>


      <Footer />


    </BrowserRouter>

  );

}


export default App;