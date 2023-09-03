import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Coins from "./Component/Coins";
import Exchanges from "./Component/Exchanges";
import Error from "./Component/Error";
import Loader from "./Component/Loader";
import News from "./Component/News";
import Trending from "./Component/Trending";
import Footer from "./Component/Footer";
import Chart from "./Component/Chart";
import Nft from "./Component/Nft";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/news" element={<News />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/nfts" element={<Nft />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
