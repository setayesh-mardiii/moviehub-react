import { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext();



export function ThemeProvider({ children }) {


  const [darkMode, setDarkMode] = useState(true);



  useEffect(() => {


    if(darkMode){

      document.body.classList.add("dark");

      document.body.classList.remove("light");


    }else{


      document.body.classList.add("light");

      document.body.classList.remove("dark");


    }


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