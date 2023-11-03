import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CreateProduct from "./CreateProduct";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store/index";

test("Form input Product Name dapat menerima input teks dan menampilkannya", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );
  const productNameInput = screen.getByLabelText("Product Name");

  fireEvent.change(productNameInput, { target: { value: "Contoh Produk" } });

  expect(productNameInput.value).toBe("Contoh Produk");
});

test("Pilihan setiap form yang dipilih dapat disimpan dan ditampilkan dengan benar", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );
  const productCategorySelect = screen.getByLabelText("Product Category");
  const brandNewRadio = screen.getByLabelText("Brand New");
  const secondHandRadio = screen.getByLabelText("Second Hand");

  fireEvent.change(productCategorySelect, { target: { value: "sneaker" } });
  fireEvent.click(brandNewRadio);

  expect(productCategorySelect.value).toBe("sneaker");
  expect(brandNewRadio.checked).toBe(true);
  expect(secondHandRadio.checked).toBe(false);
});

test("Product Name tidak boleh kosong dan tidak mengandung karakter simbol tertentu", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );
  const productNameInput = screen.getByLabelText("Product Name");

  fireEvent.change(productNameInput, { target: { value: "~!@#$%^&*(){}|:;" } });

  expect(screen.getByTestId("error-message")).toBeInTheDocument();
});

test("Product Name tidak boleh melebihi 25 karakter", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );

  const productNameInput = screen.getByLabelText("Product Name");

  fireEvent.change(productNameInput, {
    target: { value: "Produk dengan 25 karakter" },
  });
  expect(
    screen.queryByText("Product name must not exceed 25 characters")
  ).not.toBeInTheDocument();

  fireEvent.change(productNameInput, {
    target: { value: "Produk dengan lebih dari 25 karakter" },
  });
  expect(
    screen.getByText("Product name must not exceed 25 characters")
  ).toBeInTheDocument();
});

test("Semua form field tidak boleh kosong", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );

  const productCategorySelect = screen.getByLabelText("Product Category");
  const brandNewRadio = screen.getByLabelText("Brand New");

  fireEvent.change(productCategorySelect, { target: { value: "sneaker" } });
  fireEvent.click(brandNewRadio);

  expect(
    screen.queryByText("Product Category is required")
  ).not.toBeInTheDocument();
  expect(screen.queryByText("Condition is required")).not.toBeInTheDocument();
});
