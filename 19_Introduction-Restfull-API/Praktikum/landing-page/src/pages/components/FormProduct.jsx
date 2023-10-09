import React from "react";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { fetchPostProducts } from "../../store/createProductSlice";
import ListProduct from "../ListProduct";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function FormProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emptyData = {
    productName: "",
    productCategory: "",
    productFreshness: "",
    addDescription: "",
    productPrice: "",
    productImage: "",
  };

  const [data, setData] = useState(emptyData);
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputImg = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity() || errorMessage !== "") {
      event.preventDefault();
      event.stopPropagation();
      alert("Form fields must be filled!");
    } else {
      event.preventDefault();
      alert("Form submitted!");
      dispatch(
        fetchPostProducts({
          id: nextId++,
          ...data,
        })
      );
      setData(emptyData);
      inputImg.current.value = null;
      setValidated(false);

      const returnTo = "product";
      navigate(returnTo);
    }
    setValidated(true);
  };

  const regexSymbol = /[`~!@#$%^&*(){}|:;'"/.<_,>?]/;
  const handleInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;

    if (name === "productName") {
      if (regexSymbol.test(value)) {
        setErrorMessage("Product name must not contains symbols");
      } else if (value.length > 25) {
        setErrorMessage("Product name must not exceed 25 characters");
      } else if (value.length === 0) {
        setErrorMessage("Product name must be filled");
      } else {
        setErrorMessage("");
      }
    }

    if (name === "productPrice") {
      if (value > "0") {
        setErrorMessage("");
      } else {
        setErrorMessage("Product price is not valid");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const generateRandomPrice = () => {
    const randomPrice = Math.floor(Math.random() * 1000) + 1; 
    setData({
      ...data,
      productPrice: randomPrice.toString(), 
    });
    console.log(`Random Price: ${randomPrice}`);
  };


  return (
    <>
      <div className="content container px-5 justify-content-center">
        <h3 className="fs-4 mt-5">Detail Product</h3>

        {/* form */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="mb-4 pe-5">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="form-control"
              value={data.productName}
              onChange={handleInput}
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback" data-testid="error-message">
              Please input a product name.
            </div>
          </div>

          <div className="mb-4 pe-5">
            <label htmlFor="selectCategory">Product Category</label>
            <select
              name="productCategory"
              id="selectCategory"
              className="form-select"
              value={data.productCategory}
              onChange={handleInput}
              required
            >
              <option value=""></option>
              <option value="sneaker">Sneakers</option>
              <option value="outer">Outers</option>
              <option value="pants">Pants</option>
            </select>
            <div className="invalid-feedback">Please select a category!</div>
          </div>

          <div className="mb-4 pe-5">
            <label htmlFor="inputFile">Image of Product</label>
            <input
              type="file"
              className="form-control"
              id="producttFile"
              name="productImage"
              accept=".jpg, .jpeg, .png"
              ref={inputImg}
              onChange={handleInput}
              required
            />
            <div className="invalid-feedback">Please select an image file!</div>
          </div>

          <div>
            <label>Product Freshness</label>
          </div>
          <div className="form-check">
            <input
              id="brandNew"
              type="radio"
              name="productFreshness"
              className="form-check-input"
              value="brand new"
              onChange={handleInput}
              checked={data.productFreshness === "brand new"}
              required
            />
            <label htmlFor="brandNew" className="form-check-label">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              id="secondHand"
              type="radio"
              name="productFreshness"
              className="form-check-input"
              value="second hand"
              onChange={handleInput}
              checked={data.productFreshness === "second hand"}
              required
            />
            <label htmlFor="secondHand" className="form-check-label">
              Second Hand
            </label>
          </div>
          <div className="form-check mb-4 pe-5">
            <input
              id="refurbished"
              type="radio"
              name="productFreshness"
              className="form-check-input"
              value="refurbished"
              onChange={handleInput}
              checked={data.productFreshness === "refurbished"}
              required
            />
            <label htmlFor="refurbished" className="form-check-label">
              Refurbished
            </label>{" "}
            <br />
            <div className="invalid-feedback">
              Please select a freshness option!
            </div>
          </div>

          <div className="form-floating mb-4 pe-5">
            <textarea
              id="additionalDescription"
              name="addDescription"
              className="form-control"
              placeholder="add your description"
              onChange={handleInput}
              value={data.addDescription}
              required
            ></textarea>
            <label htmlFor="additionalDescription">
              Additional Description
            </label>
            <div className="invalid-feedback">
              Please fill in this additional description!
            </div>
          </div>

          <div>
            <label htmlFor="price">Product Price</label>
          </div>
          <div className="input-group mb-4 pe-5">
            <span className="input-group-text">$</span>
            <input
              id="price"
              type="number"
              name="productPrice"
              className="form-control"
              onChange={handleInput}
              value={data.productPrice}
              required
            />
            <button
              className="btn btn-primary rounded"
              onClick={generateRandomPrice}
            >
              Generate Random Price
            </button>
            <div className="invalid-feedback">Please input a price!</div>
          </div>

          <div className="text-center">
            <p className="text-danger">{errorMessage}</p>
          </div>

          <div className="d-grid mb-4 pe-5">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
        {/* end form */}
      </div>
      <div className="container-fluid">
        {/* Table */}
        <ListProduct />
      </div>
    </>
  );
}
let nextId = 1;

export default FormProduct;
