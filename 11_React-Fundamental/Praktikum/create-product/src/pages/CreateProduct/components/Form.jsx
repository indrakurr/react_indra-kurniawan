function Form() {
  return (
    <form className="was-validated">
      <div className="mb-3 pe-5">
        <label htmlFor="product-name" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="product-name"
          minLength="6"
          maxLength="50"
          required
        />
        <div className="valid-feedback">Looks good!</div>
        <div className="invalid-feedback">Please input a product name.</div>
      </div>
      <div className="mb-3 pe-5">
        <label htmlFor="product-category" className="form-label">
          Product category
        </label>
        <select
          className="form-select"
          id="product-category"
          aria-label="select"
          required
        >
          <option value=""></option>
          <option value="1">Sneakers</option>
          <option value="2">Outers</option>
          <option value="3">Pants</option>
        </select>
        <div className="invalid-feedback">Please select one item!</div>
      </div>
      <div className="mb-3 pe-5">
        <label htmlFor="product-image" className="form-label">
          Image of Product
        </label>
        <input
          type="file"
          className="form-control file-upload"
          id="product-image"
          name="product-image"
        />
        <div className="invalid-feedback">Please input one image file!</div>
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
          required
        />
        <label className="form-check-label" htmlFor="second-hand">
          Second Hand
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="refurbished"
          required
        />
        <label className="form-check-label" htmlFor="refurbished">
          Refurbished
        </label>
        <div className="invalid-feedback">Please check one!</div>
      </div>
      <div className="form-floating mt-3 pe-5">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="textarea"
          required
        ></textarea>
        <label htmlFor="textarea">Additional Description</label>
        <div className="invalid-feedback">
          Please fill this additional description!
        </div>
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="product-price">Product Price</label>
      </div>
      <div className="input-group mb-3 pe-5">
        <span className="input-group-text">$</span>
        <input
          type="text"
          className="form-control"
          id="product-price"
          aria-label="Amount (to the nearest dollar)"
          required
        />
        <div className="invalid-feedback">Please input a price!</div>
      </div>
      <div className="d-grid mt-4 pe-5">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
