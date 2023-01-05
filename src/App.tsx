import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DailyFocus from "./components/DailyFocus";
import ViewCalendar from "./components/Calendar";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <header className="App-header">GOAL SETTING APP</header>

      <div className="main_page">
        <DailyFocus />
        <ViewCalendar />

        {/* <Quotes /> */}
      </div>
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
          <Routes>
            <Route>Route path="months" element={<Months />}</Route>
          </Routes>
        </BrowserRouter>  */
}
