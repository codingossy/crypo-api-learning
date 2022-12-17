import React from "react";
import { Route, Routes } from "react-router-dom";
import CryptoCurr from "../pages/CryptoCurr";
import CryptoDeets from "../pages/CryptoDeets";
import CryptoEx from "../pages/CryptoEx";
import Exchanges from "../pages/Exchanges";
import Home from "../pages/Home";
import News from "../pages/News";

const RouthPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/cyptocurr" element={<CryptoCurr />} />
      <Route path="/crypto/:coinId" element={<CryptoDeets />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default RouthPath;
