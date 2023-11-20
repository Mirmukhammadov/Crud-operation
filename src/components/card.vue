<template>
  <div class="container">
    <ul v-for="item in datavalue" :key="item.id" class="card__list">
      <li class="card__item">
        <p>{{ item.id }}</p>

        <p>${{ item.cost }}</p>
        <p>{{ item.name_uz }}</p>
        <p>{{ item.address }}</p>
        <p>{{ item.created_date }}</p>
        <div>
          <button class="delete__button">delete</button>
          <button class="edit__button">edit</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let datavalue = ref();
fetch("http://94.158.54.194:9092/api/product")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    datavalue.value = data;
    console.log(data);
    console.log(datavalue.value);
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
</style>
