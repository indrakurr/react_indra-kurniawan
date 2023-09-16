function ListProduct() {
  return (
    <div className="container-table">
      <h2 className="fs-3 text-center mt-3">List Product</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Image of Product</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Additional Description</th>
            <th scope="col">Product Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>New Balance 9060</td>
            <td>Sneakers</td>
            <td>NB9060.png</td>
            <td>Brand New</td>
            <td>Ini adalah Sepatu New Balance seri 9060</td>
            <td>$133</td>
          </tr>
          <tr>
            <td>2</td>
            <td>New Balance 9060</td>
            <td>Sneakers</td>
            <td>NB9060.png</td>
            <td>Brand New</td>
            <td>Ini adalah Sepatu New Balance seri 9060</td>
            <td>$133</td>
          </tr>
          <tr>
            <td>3</td>
            <td>New Balance 9060</td>
            <td>Sneakers</td>
            <td>NB9060.png</td>
            <td>Brand New</td>
            <td>Ini adalah Sepatu New Balance seri 9060</td>
            <td>$133</td>
          </tr>
        </tbody>
      </table>
      <div className="search-list mb-5">
        <form className="search" role="search">
          <input
            id="searchInput"
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            id="deleteButton"
            className="btn btn-primary mx-1 mt-2"
            type="button"
          >
            Deletion
          </button>
          <button
            id="searchButton"
            className="btn btn-outline-primary mt-2"
            type="button"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default ListProduct;
