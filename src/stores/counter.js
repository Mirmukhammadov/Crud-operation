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
        const response = await axios.post(
          "http://94.158.54.194:9092/api/product",
          newProduct
        );

        const createdProduct = response.data;
        this.products.push(createdProduct);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  },
}));
