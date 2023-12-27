import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./reset.css";
import CustomizationProvider from "./components/CustomizationProvider";
import WeekProvider from "./components/WeekProvider";
import DaysProvider from "./components/DaysProvider";
import MonthsProvider from "./components/MonthsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomizationProvider>
      <WeekProvider>
        <MonthsProvider>
          <DaysProvider>
            <App />
          </DaysProvider>
        </MonthsProvider>
      </WeekProvider>
    </CustomizationProvider>
  </React.StrictMode>
);
