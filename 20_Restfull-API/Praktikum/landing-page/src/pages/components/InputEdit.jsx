import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { fetchPutProductById } from "../../store/updateProductSlice";

function ModalInputEdit({ product }) {
  const dispatch = useDispatch();
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleShow = () => {
    setIsShow(true);
  };

  const handleFieldChange = (fieldName, value) => {
    // Buat salinan objek editedProduct
    const updatedProduct = { ...editedProduct };
    // Perbarui nilai dalam objek editedProduct
    updatedProduct[fieldName] = value;
    // Set editedProduct dengan objek yang diperbarui
    setEditedProduct(updatedProduct);
  };

  const handleUpdateProduct = () => {
    // Kirim objek editedProduct yang diperbarui ke Redux
    dispatch(fetchPutProductById(editedProduct));
    // Tutup modal
    handleClose();
  };

  return (
    <>
      <button className="btn btn-success" onClick={handleShow}>
        Edit
      </button>

      <Modal
        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="formUpdate">
            <div className="mb-3 px-5">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="form-control"
                value={editedProduct.productName}
                onChange={(e) =>
                  handleFieldChange("productName", e.target.value)
                }
                required
              />
            </div>
            <div className="mb-3 px-5">
              <label htmlFor="selectCategory">Product Category</label>
              <select
                name="productCategory"
                id="selectCategory"
                className="form-select"
                value={editedProduct.productCategory}
                onChange={(e) =>
                  handleFieldChange("productCategory", e.target.value)
                }
                required
              >
                <option value="">Choose one category</option>
                <option value="hoodie">Sneakers</option>
                <option value="t-shirt">Outers</option>
                <option value="jeans">Pants</option>
              </select>
            </div>
            <div className="px-5">
              <label>Product Freshness</label>
            </div>
            <div className="form-check ms-4 px-5">
              <input
                id="brandNew"
                type="radio"
                name="productFreshness"
                className="form-check-input"
                value="brand new"
                checked={editedProduct.productFreshness === "brand new"}
                onChange={(e) =>
                  handleFieldChange("productFreshness", e.target.value)
                }
                required
              />
              <label htmlFor="brandNew" className="form-check-label">
                Brand New
              </label>
            </div>
            <div className="form-check ms-4 px-5">
              <input
                id="secondHand"
                type="radio"
                name="productFreshness"
                className="form-check-input"
                value="second hand"
                checked={editedProduct.productFreshness === "second hand"}
                onChange={(e) =>
                  handleFieldChange("productFreshness", e.target.value)
                }
                required
              />
              <label htmlFor="secondHand" className="form-check-label">
                Second Hand
              </label>
            </div>
            <div className="form-check mb-3 ms-4 px-5">
              <input
                id="refurbished"
                type="radio"
                name="productFreshness"
                className="form-check-input"
                value="refurbished"
                checked={editedProduct.productFreshness === "refurbished"}
                onChange={(e) =>
                  handleFieldChange("productFreshness", e.target.value)
                }
                required
              />
              <label htmlFor="refurbished" className="form-check-label">
                Refurbished
              </label>
            </div>
            <div className="form-floating mb-3 ms-5 pe-5">
              <textarea
                id="additionalDescription"
                name="addDescription"
                className="form-control"
                placeholder="add your description"
                value={editedProduct.addDescription}
                onChange={(e) =>
                  handleFieldChange("addDescription", e.target.value)
                }
                required
              ></textarea>
              <label htmlFor="additionalDescription">
                Additional Description
              </label>
            </div>
            <div className="ps-5">
              <label htmlFor="price">Product Price</label>
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">$</span>
              <input
                id="price"
                type="number"
                name="productPrice"
                className="form-control"
                value={editedProduct.productPrice}
                onChange={(e) =>
                  handleFieldChange("productPrice", e.target.value)
                }
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button
            variant="primary"
            form="formUpdate"
            onClick={handleUpdateProduct}
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInputEdit;
