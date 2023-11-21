// counter.js
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", () => ({
  state: () => ({
    products: [],
  }),
  actions: {
    async addProduct(newProduct) {
      try {
        console.log("Sending request with data:", newProduct);

        const response = await axios.post(
          "http://94.158.54.194:9092/api/product",
          newProduct,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Server Response:", response.data);

        const createdProduct = response.data;
        if (!this.products) {
          this.products = [];
        }

        this.products.push(createdProduct);
        console.log(this.products.value);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },

    removeProduct(id) {
      axios
        .delete(`http://94.158.54.194:9092/api/product/${id}`)
        .then((response) => console.log(response))
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
          // Optionally, you can perform additional actions after a successful update
        })
        .catch((error) => console.log(error, "error"));
    },
  },
}));
