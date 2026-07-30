import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import "./index.css";
import "./styles/Variable.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/700.css";


createRoot(document.getElementById("root")).render(

  <StrictMode>

    <ThemeProvider>

      <App />

    </ThemeProvider>

  </StrictMode>

);