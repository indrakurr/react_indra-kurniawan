import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, fetchGetProducts } from "../store/getProductSlice";
import { fetchDeleteProduct } from "../store/deleteProductSlice";
import ModalInputEdit from "../pages/components/InputEdit";

function ListProduct() {
  const stateProducts = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      dispatch(fetchDeleteProduct(id))
        .then(() => {
          dispatch(fetchGetProducts());
        })
        .catch((error) => {
          console.error("Error deleting product: ", error);
        });
    }
  };

  return (
    <>
      {stateProducts.status === "loading" && <p>Loading ...</p>}
      {stateProducts.status === "failed" && (
        <div>
          <p>something went wrong</p>
          <p>{stateProducts.message}</p>
        </div>
      )}
      {stateProducts.status === "success" && (
        <div>
          <h3 className="text-center">List Product</h3>

          <table className="table table-striped table-hover">
            <thead>
              <tr className="fs-7">
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Image of Product</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
                <th scope="col">Product Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stateProducts.data.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>
                    <img
                      className="align-item-center"
                      src={product.productImage}
                      alt="ProductImage"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{product.productFreshness}</td>
                  <td>{product.addDescription}</td>
                  <td>${product.productPrice}</td>
                  <td className="d-flex py-3 gap-1">
                    <ModalInputEdit product={product} />
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(handleDelete(product.id));
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      state={{ productData: product }}
                    >
                      <button className="btn btn-primary">Detail</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ListProduct;
