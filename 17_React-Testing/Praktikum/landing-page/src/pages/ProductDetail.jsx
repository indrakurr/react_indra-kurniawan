import React from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../store/product/ProductSlice";

function ProductDetail() {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const productDetail = products.find((product) => product.id === parseInt(id));

  if (!productDetail) {
    return <p>Product not found</p>;
  }

  return (
    <section>
      <Header />
      <div className="container mt-5">
        <h3>Product Detail</h3>
        <div className="mb-2">
          <strong>Product Name:</strong> {productDetail.productName}
        </div>
        <div className="mb-2">
          <strong>Product Category:</strong> {productDetail.productCategory}
        </div>
        <div className="mb-2">
          <strong>Image of Product:</strong>{" "}
          <img
            src={productDetail.productImage}
            alt="Product"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="mb-2">
          <strong>Product Freshness:</strong> {productDetail.productFreshness}
        </div>
        <div className="mb-2">
          <strong>Additional Description:</strong>{" "}
          {productDetail.addDescription}
        </div>
        <div className="mb-2">
          <strong>Product Price:</strong> ${productDetail.productPrice}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
