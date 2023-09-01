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

  form.addEventListener("input", function () {
    const isValid = validateForm();
    submitButton.disabled = !isValid;
  });

  function validateForm() {
    const productName = productNameInput.value;
    const productCategory = productCategorySelect.value;
    const productImage = productImageInput.value;
    const productFreshness = Array.from(productFreshnessInputs).find(
      (input) => input.checked
    );
    const additionalDescription = additionalDescriptionTextarea.value;
    const productPrice = productPriceInput.value;

    // Product Name
    const isProductNameValid =
      productName.trim() !== "" &&
      productName.length <= 25 &&
      !/[@#{}]/.test(productName);

    // Product Category
    const isProductCategoryValid = productCategory !== "";

    // Product Image
    const isProductImageValid = productImageInput.files.length > 0;

    // Product Freshness
    const isProductFreshnessValid = !!productFreshness;

    // Additional Description
    const isAdditionalDescriptionValid = additionalDescription.trim() !== "";

    // Product Price
    const isProductPriceValid = productPrice.trim() !== "";

    // Aktifkan atau nonaktifkan tombol "Submit" berdasarkan validitas semua input
    const isValid =
      isProductNameValid &&
      isProductCategoryValid &&
      isProductImageValid &&
      isProductFreshnessValid &&
      isAdditionalDescriptionValid &&
      isProductPriceValid;

    // Berikan atau hilangkan border merah pada input
    productNameInput.style.border = isProductNameValid ? "" : "1px solid red";
    productCategorySelect.style.border = isProductCategoryValid
      ? ""
      : "1px solid red";
    productImageInput.style.border = isProductImageValid ? "" : "1px solid red";
    additionalDescriptionTextarea.style.border = isAdditionalDescriptionValid
      ? ""
      : "1px solid red";
    productPriceInput.style.border = isProductPriceValid ? "" : "1px solid red";

    return isValid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Mengambil semua data yang telah divalidasi
      const productName = productNameInput.value;
      const productCategory = productCategorySelect.value;
      const productImage = productImageInput.value;
      const productFreshness = Array.from(productFreshnessInputs).find(
        (input) => input.checked
      ).id;
      const additionalDescription = additionalDescriptionTextarea.value;
      const productPrice = productPriceInput.value;

      // Menampilkan alert dengan data yang dikumpulkan
      alert(`
                Product Name: ${productName}
                Product Category: ${productCategory}
                Product Image: ${productImage}
                Product Freshness: ${productFreshness}
                Additional Description: ${additionalDescription}
                Product Price: $${productPrice}
            `);

      // Melakukan reset form
      form.reset();
    }
  });
});
