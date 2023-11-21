import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", () => ({
  state: () => ({
    products: [],
  }),
  actions: {
    async addProduct(newProduct) {
      try {
        const response = await axios.post(
          "http://94.158.54.194:9092/api/product",
          newProduct,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const createdProduct = response.data;
        if (!this.products) {
          this.products = [];
        }
        this.products.push(createdProduct);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },

    removeProduct(id) {
      axios
        .delete(`http://94.158.54.194:9092/api/product/${id}`)
        .then(response)
        .catch((error) => console.log(error, "erorr"));
    },

    editProduct(id, product_type_id, cost, name_uz, address) {
      axios
        .put(`http://94.158.54.194:9092/api/product/${id}`, {
          product_type_id,
          cost,
          name_uz,
          address,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error, "error"));
    },
  },
}));
