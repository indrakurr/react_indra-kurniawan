import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import NotFoundPage from "./pages/components/NotFoundPage";
import ListProduct from "./pages/ListProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/create-product" index element={<CreateProduct />} />
        <Route path="/product" index element={<ListProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
