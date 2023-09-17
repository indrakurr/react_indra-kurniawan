import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function FormProduct() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("brand new");
  const [productPrice, setProductPrice] = useState("");
  const [productList, setProductList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);

  //onSubmit event handling
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // Validasi form
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      alert("form field must be filled!");
    }

    // Validasi nama produk yang tidak valid
    if (event.target.productName.value === "" || productName.length >= 25) {
      event.preventDefault();
      event.stopPropagation();
      alert("Please enter a valid product name");
    }

    // Validasi kategori dan harga produk yang tidak valid
    if (productCategory.length === 0 || productPrice.length === 0) {
      alert("form invalid, check again!");
    }

    //form is valid, then create new object
    else {
      const newProduct = {
        name: productName,
        category: productCategory,
        freshness: productFreshness,
        price: productPrice,
      };
      alert("Form Submited");
      event.preventDefault();

      //set a new object into a state
      setProductList([...productList, newProduct]);
    }
    //set validation form
    setValidated(true);

    //condition for editing a data, then edit a value from existing data
    if (editIndex !== null) {
      const updatedProductList = [...productList];
      updatedProductList[editIndex] = {
        name: productName,
        category: productCategory,
        freshness: productFreshness,
        price: productPrice,
      };
      setProductList(updatedProductList);
      alert("form has been edited");
      setEditIndex(null);
    }

    // reset input values after submitted
    setProductName("");
    setProductCategory("");
    setProductFreshness("brand new");
    setProductPrice("");
  };

  //handle productName onChange
  function handleNameChange(e) {
    setProductName(e.target.value);
    console.log(e.target.value);
    if (productName.length >= 10) {
      setError(e);
    }
    if (productName.length > 25) {
      alert("Product Name must not exceed 25 characters");
      setError(e);
    }
    if (productName.length < 10) {
      setError(null);
    }
  }

  //handle Category onChange
  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  //handle ProductFreschness onChange
  const handleProductFreshnessChange = (e) => {
    setProductFreshness(e.target.value);
  };

  // Handle editProduct onClick
  const handleEditProduct = (index) => {
    const productToEdit = productList[index];
    setProductName(productToEdit.name);
    setProductCategory(productToEdit.category);
    setProductFreshness(productToEdit.freshness);
    setProductPrice(productToEdit.price);
    setEditIndex(index);
  };

  // Handle deleteProduct onClick
  const handleDeleteProduct = (index) => {
    //pop up a notification when deleting
    const isConfirmed = window.confirm(
      "Apakah Anda ingin menghapus data tersebut?"
    );
    if (isConfirmed) {
      const updatedProductList = [...productList];
      updatedProductList.splice(index, 1);
      setProductList(updatedProductList);
    }
  };

  // Random Number
  function randomNumber() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomNum = getRandomInt(1000);
    console.log("Random Number:", randomNum); // Log to the console
    setProductPrice(randomNum.toString());
  }

  //render
  return (
    <>
      <div className="content container px-5 justify-content-center">
        <h3 className="fs-4 mt-5">Detail Product</h3>

        {/* form */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="mb-3 pe-5">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="form-control"
              value={productName}
              onChange={handleNameChange}
              required
            />

            {/* conditional rendering, if there's an error, this text would be rendered */}
            {error !== null && (
              <p className="text-center text-danger">
                Product name must not exceed 10 characters!
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
              name="product-category"
              id="product-category"
              className="form-select"
              value={productCategory}
              onChange={handleProductCategoryChange}
              required
            >
              <option value=""></option>
              <option value="sneaker">Sneakers</option>
              <option value="outers">Outers</option>
              <option value="pants">Pants</option>
            </select>
            <div className="invalid-feedback">Please select a category!</div>
          </div>

          <div className="mb-3 pe-5">
            <label htmlFor="inputFile">Image of Product</label>
            <input
              type="file"
              className="form-control"
              id="product-image"
              name="product-image"
              required
            />
            <div className="invalid-feedback">Please select an image file!</div>
          </div>

          <div>
            <label>Product Freshness</label>
          </div>
          <div className="form-check">
            <input
              id="brand-new"
              type="radio"
              name="flexRadioDefault"
              className="form-check-input"
              value="brand-new"
              checked={productFreshness === "brand new"}
              onChange={handleProductFreshnessChange}
              required
            />
            <label htmlFor="brandNew" className="form-check-label">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              id="second-hand"
              type="radio"
              name="flexRadioDefault"
              className="form-check-input"
              value="second-hand"
              checked={productFreshness === "second hand"}
              onChange={handleProductFreshnessChange}
              required
            />
            <label htmlFor="secondHand" className="form-check-label">
              Second Hand
            </label>
          </div>
          <div className="form-check mb-3 pe-5">
            <input
              id="refurbished"
              type="radio"
              name="flexRadioDefault"
              className="form-check-input"
              value="refurbished"
              checked={productFreshness === "refurbished"}
              onChange={handleProductFreshnessChange}
              required
            />
            <label htmlFor="refurbished" className="form-check-label">
              Refurbished
            </label>
            <div className="invalid-feedback">
              Please select a freshness option!
            </div>
          </div>

          <div className="form-floating mb-3 pe-5">
            <textarea
              id="additionalDescription"
              name="additionalDescription"
              className="form-control"
              placeholder="add your description"
              required
            ></textarea>
            <label htmlFor="additionalDescription">
              Additional Description
            </label>
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

          <div className="d-grid mb-3 pe-5">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
        {/* end form */}
      </div>
      <div className="container">
        <h3 className="text-center mt-3">List Product</h3>

        {/* table */}
        <table className="table table-striped table-hover">
          <thead>
            <tr className="fs-7">
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Product Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* showing a data with map() */}
            {productList.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.freshness}</td>
                <td>${product.price}</td>
                <td className="d-flex">
                  <button
                    className="btn btn-primary m-1 fw-medium fs-6"
                    onClick={() => handleEditProduct(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger m-1 fw-medium fs-6"
                    onClick={() => handleDeleteProduct(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* end table */}
      </div>
    </>
  );
}
