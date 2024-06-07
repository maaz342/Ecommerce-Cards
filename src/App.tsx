import React from "react";
import logo from "./logo.svg";
import "./App.css";
import APIScreenHandling from "./pages/Cards";
import AppRouter from "./config/router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <APIScreenHandling /> */}
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
