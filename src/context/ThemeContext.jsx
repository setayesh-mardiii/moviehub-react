import { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext(null);



export function ThemeProvider({ children }) {


  const [darkMode, setDarkMode] = useState(false);



  useEffect(() => {

    document.body.classList.toggle("dark", darkMode);

    document.body.classList.toggle("light", !darkMode);

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