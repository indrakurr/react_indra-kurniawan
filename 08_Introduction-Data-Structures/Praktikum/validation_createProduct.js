document.addEventListener("DOMContentLoaded", function () {
  const productNameInput = document.getElementById("product-name");
  const productCategorySelect = document.getElementById("product-category");
  const productImageInput = document.getElementById("product-image");
  const productFreshnessInputs = document.querySelectorAll(
    'input[name="flexRadioDefault"]'
  );
  const additionalDescriptionTextarea = document.getElementById("textarea");
  const productPriceInput = document.querySelector(
    "input[aria-label='Amount (to the nearest dollar)']"
  );
  const submitButton = document.querySelector("button[type='submit']");
  const form = document.querySelector("form");

  // Membuat variabel untuk menyimpan data produk yang akan ditampilkan di tabel
  const productList = [];

  // Membuat fungsi untuk memperbarui tabel produk
  function updateProductTable() {
    const table = document.querySelector(".table");
    table.innerHTML = "";

    if (productList.length === 0) {
      table.innerHTML = "<p>No products available.</p>";
      return;
    }

    // Membuat header tabel
    const tableHeader = `
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Image</th>
          <th>Freshness</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
    `;
    table.innerHTML += tableHeader;

    // Menambahkan setiap produk ke tabel
    const tableBody = document.createElement("tbody");
    for (const product of productList) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.productName}</td>
        <td>${product.productCategory}</td>
        <td>${product.productImage}</td>
        <td>${product.productFreshness}</td>
        <td>${product.additionalDescription}</td>
        <td>$${product.productPrice}</td>
      `;
      tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
  }

  // Tambahkan event listener untuk input pada form
  form.addEventListener("input", function () {
    const isValid = validateForm();
    submitButton.disabled = !isValid;
  });

  // Memperbarui fungsi submitForm
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form standar

    const isValid = validateForm();

    if (isValid) {
      // Mengambil semua data yang telah divalidasi
      const productName = productNameInput.value;
      const productCategory =
        productCategorySelect.options[productCategorySelect.selectedIndex].text;
      const productImage = productImageInput.value;
      const productFreshness = Array.from(productFreshnessInputs).find(
        (input) => input.checked
      ).id;
      const additionalDescription = additionalDescriptionTextarea.value;
      const productPrice = productPriceInput.value;

      // Menambahkan data produk ke daftar produk
      productList.push({
        productName,
        productCategory,
        productImage,
        productFreshness,
        additionalDescription,
        productPrice,
      });

      // Menampilkan data produk dalam tabel
      updateProductTable();

      // Melakukan reset form
      form.reset();
    }
  });

  // Fungsi validasi form
  function validateForm() {
    const productName = productNameInput.value;
    const productCategory = productCategorySelect.value;
    const productImage = productImageInput.value;
    const productFreshness = Array.from(productFreshnessInputs).find(
      (input) => input.checked
    );
    const additionalDescription = additionalDescriptionTextarea.value;
    const productPrice = productPriceInput.value;

    // Validasi Product Name
    const isProductNameValid =
      productName.trim() !== "" &&
      productName.length <= 25 &&
      !/[@#{}]/.test(productName);

    // Tampilkan pesan kesalahan jika Product Name tidak valid
    if (!isProductNameValid) {
      alert("Product Name must not contain symbols.");
      return false; // Menghentikan validasi jika tidak valid
    }

    // Validasi Product Category
    const isProductCategoryValid = productCategory !== "";

    // Validasi Product Image (Anda mungkin ingin menambahkan validasi tambahan di sini)
    const isProductImageValid = productImage.trim() !== "";

    // Validasi Product Freshness
    const isProductFreshnessValid = !!productFreshness;

    // Validasi Additional Description
    const isAdditionalDescriptionValid = additionalDescription.trim() !== "";

    // Validasi Product Price
    const isProductPriceValid = productPrice.trim() !== "";

    // Aktifkan atau nonaktifkan border merah pada input
    productNameInput.style.border = isProductNameValid ? "" : "1px solid red";
    productCategorySelect.style.border = isProductCategoryValid
      ? ""
      : "1px solid red";
    productImageInput.style.border = isProductImageValid ? "" : "1px solid red";
    additionalDescriptionTextarea.style.border = isAdditionalDescriptionValid
      ? ""
      : "1px solid red";
    productPriceInput.style.border = isProductPriceValid ? "" : "1px solid red";

    // Kembalikan apakah form valid secara keseluruhan
    return (
      isProductNameValid &&
      isProductCategoryValid &&
      isProductImageValid &&
      isProductFreshnessValid &&
      isAdditionalDescriptionValid &&
      isProductPriceValid
    );
  }

  // Memanggil fungsi updateProductTable saat halaman dimuat
  updateProductTable();
});
