<template>
  <div class="container">
    <ul v-for="item in datavalue" :key="item.id" class="card__list">
      <li class="card__item">
        <p v-if="editProductId">{{ item.product_type_id }}</p>
        <input v-else type="number" v-model="item.product_type_id" />
        <p v-if="editProductId">${{ item.cost }}</p>
        <input v-else type="text" v-model="item.cost" />
        <p v-if="editProductId">{{ item.name_uz }}</p>
        <input v-else type="text" v-model="item.name_uz" />
        <p v-if="editProductId">{{ item.address }}</p>
        <input v-else type="text" v-model="item.address" />
        <p>{{ formatDate(item.created_date) }}</p>
        <div>
          <button class="delete__button" @click="getId(item.id)">delete</button>
          <button
            v-if="editProductId"
            class="edit__button"
            @click="editProduct(item, item.id)"
          >
            edit
          </button>
          <button class="save__button" @click="saveProduct(item)" v-else>
            save
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../stores/counter";

const productStore = useProductStore();
let editProductId = ref(true);

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function getId(productId) {
  productStore.actions.removeProduct(productId);
}

function editProduct(obj, productId) {
  editProductId.value = false;

  // productStore.actions.editProduct(productId);
}

function saveProduct(obj) {
  editProductId.value = true;
  const { id, product_type_id, cost, name_uz, address } = obj;
  // console.log(product_type_id, cost, name_uz, address);

  productStore.actions.editProduct(id, product_type_id, cost, name_uz, address);
}

let datavalue = ref();
fetch("http://94.158.54.194:9092/api/product")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    datavalue.value = data;
  });
</script>

<style scoped>
.card__item {
  display: flex;
  justify-content: space-between;
  background-color: #1e2139;
  margin-bottom: 10px;
  padding: 20px 15px;
  color: white;
}

.delete__button {
  cursor: pointer;
  margin-right: 10px;
  background: red;
  border: none;
  padding: 2px 5px;
}

.edit__button {
  cursor: pointer;
  background: yellow;
  border: none;
  padding: 2px 5px;
}

.save__button {
  cursor: pointer;
  background: rgb(131, 195, 131);
  border: none;
  padding: 2px 5px;
}
</style>
