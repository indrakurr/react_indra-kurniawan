import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function FormProduct() {
  const [productName, setProductName] = useState("");
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (productName === "") {
      event.preventDefault();
      alert("Please enter a valid product name");
    } else {
      alert("Form submitted");
    }

    setValidated(true);
  };

  function handleNameChange(e) {
    setProductName(e.target.value);
    console.log(e.target.value);
    if (productName.length >= 10) {
      setError(e);
    }
    if (productName.length > 25) {
      alert("Product Name must not exceed 25 characters");
    }
  }

  function randomNumber() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomNum = getRandomInt(100);
  console.log('Random Number:', randomNum); // Log to the console
  setProductPrice(randomNum.toString());
}

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="mb-3 pe-5">
        <label htmlFor="product-name" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="product-name"
          name="product-name"
          value={productName}
          onChange={handleNameChange}
          required
        />
        {error !== null && (
          <p className="text-center text-warning">
            Product name must not exceed 10 characters
          </p>
        )}
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please input a product name.</div>
      </div>

      <div className="mb-3 pe-5">
        <label htmlFor="product-category" className="form-label">
          Product Category
        </label>
        <select
          className="form-select"
          id="product-category"
          name="product-category"
          required
        >
          <option value=""></option>
          <option value="sneakers">Sneakers</option>
          <option value="outers">Outers</option>
          <option value="pants">Pants</option>
        </select>
        <div className="invalid-feedback">Please select a category!</div>
      </div>

      <div className="mb-3 pe-5">
        <label htmlFor="product-image" className="form-label">
          Image of Product
        </label>
        <input
          type="file"
          className="form-control"
          id="product-image"
          name="product-image"
          required
        />
        <div className="invalid-feedback">Please select an image file!</div>
      </div>

      <div className="mb-3">
        <label>Product Freshness</label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="brand-new"
          value="brand-new"
          required
        />
        <label className="form-check-label" htmlFor="brand-new">
          Brand New
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="second-hand"
          value="second-hand"
          required
        />
        <label className="form-check-label" htmlFor="second-hand">
          Second Hand
        </label>
      </div>

      <div className="form-check mb-3 pe-5">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="refurbished"
          value="refurbished"
          required
        />
        <label className="form-check-label" htmlFor="refurbished">
          Refurbished
        </label>
        <div className="invalid-feedback">
          Please select a freshness option!
        </div>
      </div>

      <div className="form-floating mt-3 pe-5">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="additionalDescription"
          name="additionalDescription"
          required
        ></textarea>
        <label htmlFor="additionalDescription">Additional Description</label>
        <div className="invalid-feedback">
          Please fill in this additional description!
        </div>
      </div>

      <div className="mb-3 mt-3">
        <label htmlFor="product-price">Product Price</label>
      </div>

      <div className="input-group mb-3 pe-5">
        <span className="input-group-text">$</span>
        <input
          type="number"
          className="form-control"
          id="product-price"
          name="product-price"
          aria-label="Amount (to the nearest dollar)"
          required
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <div className="invalid-feedback">Please input a price!</div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={randomNumber}
        >
          Random Number
        </button>
      </div>

      <div className="d-grid mt-4 pe-5">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
}
