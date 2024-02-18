import React from "react";
import ReactDOM from "react-dom/client";
import RouterApp from "./RouterApp";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterApp />
    </ThemeProvider>
  </React.StrictMode>
);
