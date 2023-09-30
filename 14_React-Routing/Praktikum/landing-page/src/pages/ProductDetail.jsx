import React from "react";
import Header from "./components/Header";
import { db } from "./components/ProductData.jsx";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const { index } = useParams();

  const productDetail = db.find((product) => product.id === index);

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <h3>Product Detail</h3>
        <p>{productDetail.name}</p>
        <p>{productDetail.category}</p>
        <p>{productDetail.freshness}</p>
        <p>${productDetail.price}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
