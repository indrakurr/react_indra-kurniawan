import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListProduct from "./components/ListProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrapLogo from "./bootstrap-logo.png"; // Ubah nama variabel menjadi sesuatu yang unik

import "./style.css";

function CreateProduct() {
  return (
    <div>
      <Header />
      <div className="container-md px-5">
        <div className="hero-card text-center mt-5 px-5">
          <img
            src={bootstrapLogo} // Menggunakan variabel gambar yang diimpor
            alt="bootstrap-logo"
            className="img-fluid mt-2"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            title="Bootstrap Logo."
          />
          <h2 className="mt-3">Create Product</h2>
          <p>
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div className="container-md px-5 content justify-content-md-center detail-product">
          <h3 className="fs-4 mt-5">Detail Product</h3>
          <Form />
        </div>
        <div>
          <ListProduct />
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
