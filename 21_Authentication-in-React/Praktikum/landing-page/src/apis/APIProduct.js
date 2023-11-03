import axios, { AxiosError } from "axios";

const APIURL = "https://6523b2bbea560a22a4e8b1d5.mockapi.io/products/";

export const APIProducts = {
  //async function untuk GET semua product
  getProducts: async () => {
    try {
      const result = await axios.get(`${APIURL}/products`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //async function untuk GET product berdasarkan id
  getProductById: async (id) => {
    try {
      const result = await axios.get(`${APIURL}/products/${id}`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //async function untuk POST product or create new product
  postProduct: async (data) => {
    try {
      const result = await axios.post(`${APIURL}/products`, data);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //async function untuk menghapus product
  deleteProduct: async (id) => {
    try {
      const result = await axios.delete(`${APIURL}/products/${id}`);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },

  //async function untuk edit product
  updateProduct: async (id, data) => {
    try {
      const result = await axios.put(`${APIURL}/products/${id}`, data);
      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const {
          data: { errors },
        } = error.response;
        throw new AxiosError(errors);
      }
      throw new Error(error);
    }
  },
};
