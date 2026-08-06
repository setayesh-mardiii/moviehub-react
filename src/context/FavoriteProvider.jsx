import { useState } from "react";

import { FavoriteContext } from "./FavoriteContext";


export function FavoriteProvider({ children }) {


  const [favorites, setFavorites] = useState(() => {


    const saved =
      localStorage.getItem("favorites");


    return saved
      ? JSON.parse(saved)
      : [];


  });





  const addFavorite = (movie) => {


    const updated = [
      ...favorites,
      movie
    ];


    setFavorites(updated);


    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );


  };





  const removeFavorite = (id) => {


    const updated =
      favorites.filter(
        (movie) =>
          movie.id !== id
      );


    setFavorites(updated);


    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );


  };





  const isFavorite = (id) => {


    return favorites.some(
      (movie) =>
        movie.id === id
    );


  };





  return (

    <FavoriteContext.Provider

      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
      }}

    >

      {children}

    </FavoriteContext.Provider>

  );


}