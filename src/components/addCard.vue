<template>
  <div class="card">
    <form action="" @submit.prevent="addProduct" class="form">
      <h1 class="form__heading">Add product</h1>
      <input
        type="number"
        placeholder="id"
        v-model="newProduct.product_type_id"
      />
      <input
        type="text"
        placeholder="product name"
        v-model="newProduct.name_uz"
      />
      <input
        type="number"
        placeholder="product cost"
        v-model="newProduct.cost"
      />
      <input type="text" placeholder="address" v-model="newProduct.address" />
      <input type="text" placeholder="Date" v-model="newProduct.created_date" />
      <span v-if="incorrect" class="error">fill the form to add prodict</span>
      <button type="submit" @click="$emit('checkValues', incorrect)">
        Add Product
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "../stores/counter";

const productStore = useProductStore();
const incorrect = ref(false);
const newProduct = ref({
  product_type_id: 0,
  cost: 0,
  name_uz: "",
  address: "",
  created_date: new Date().toISOString(),
});

const addProduct = () => {
  if (
    newProduct.value.product_type_id &&
    newProduct.value.cost &&
    newProduct.value.name_uz
  ) {
    productStore.actions.addProduct(newProduct.value);
  } else {
    incorrect.value = true;
  }

  newProduct.value = {
    product_type_id: 0,
    cost: 0,
    name_uz: "",
    address: "",
    created_date: "",
  };
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

.error {
  color: red;
  text-align: center;
  padding-bottom: 5px;
}
</style>
