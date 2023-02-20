import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Coin_Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoinDetails/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
