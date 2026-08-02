import { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext(null);



export function ThemeProvider({ children }) {


  const [darkMode, setDarkMode] = useState(() => {


    const savedTheme = localStorage.getItem("theme");


    if (savedTheme !== null) {


      try {

        return JSON.parse(savedTheme);

      } catch {

        return savedTheme === "dark";

      }


    }


    return true; // حالت پیش‌فرض دارک



  });



  useEffect(() => {


    document.body.classList.toggle("dark", darkMode);

    document.body.classList.toggle("light", !darkMode);



    localStorage.setItem(

      "theme",

      JSON.stringify(darkMode)

    );


  }, [darkMode]);





  const toggleTheme = () => {


    setDarkMode(prev => !prev);


  };





  return (


    <ThemeContext.Provider

      value={{

        darkMode,

        toggleTheme

      }}

    >


      {children}


    </ThemeContext.Provider>


  );


}