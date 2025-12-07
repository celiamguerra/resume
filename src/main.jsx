import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-sans text-text">
      <BrowserRouter basename="/resume">
        <App />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
