import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./reset.css";
import CustomizationProvider from "./components/CustomizationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomizationProvider>
      <App />
    </CustomizationProvider>
  </React.StrictMode>
);
