import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from "../pages/Cards";
import ProductDetails from "../pages/ProductDetails";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
