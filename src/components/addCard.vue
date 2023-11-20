<template>
  <div class="card">
    <form action="" @submit.prevent="addProduct" class="form">
      <h1 class="form__heading">Add product</h1>
      <input type="number" placeholder="id" v-model="newProduct.id" />
      <input type="text" placeholder="product name" v-model="newProduct.name" />
      <input
        type="number"
        placeholder="product cost"
        v-model="newProduct.price"
      />
      <input type="text" placeholder="address" v-model="newProduct.address" />
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/counter";

const productStore = useProductStore();
console.log(productStore, "store");
const newProduct = ref({
  id: 0,
  name: "",
  price: 0,
  address: "",
});

const addProduct = () => {
  console.log("addProduct called");
  productStore.addProduct(newProduct.value);
  newProduct.value = { id: 0, name: "", price: 0, address: "" };
};
</script>

<style scoped>
.card {
  max-width: 440px;
  width: 100%;
  padding: 10px 15px;
  background: #141625;
  margin: 0 auto;
}
.form {
  display: flex;
  flex-direction: column;
}

.form > input {
  padding: 10px 5px;
  margin-bottom: 15px;
  outline: none;
  background-color: #1e2139;
  border: none;
  color: white;
}

.form__heading {
  color: white;
  font-size: 24px;
  font-family: League Spartan;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
  text-align: center;
  padding-bottom: 10px;
}

.form > input::placeholder {
  color: white;
  opacity: 0.5;
}
</style>
