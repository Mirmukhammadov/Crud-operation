<template>
  <Header />

  <div class="hero">
    <addCard />
    <Card />
    <div class="addproduct">
      <button class="addproduct-icon">+</button>
      <p class="addproduct-text">Add product</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/header.vue";
import addCard from "./components/addCard.vue";
import Card from "./components/card.vue";
</script>

<style scoped>
.hero {
  margin-top: 100px;
  position: relative;
}

.addproduct {
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  border: 0px;
  position: absolute;
  background: #7c5dfa;
  border-radius: 24px;
  padding: 10px 10px;
  cursor: pointer;
  position: absolute;
  left: auto;
  right: 20px;
}

.addproduct-icon {
  border: 0px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  background: #fff;
  padding: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 32px;
  color: #7c5dfa;
  cursor: pointer;
}

.addproduct-text {
  color: white;
  font-size: 15px;
  margin-left: 20px;
  font-family: League Spartan;
  font-weight: 700;
  line-height: 15px;
  word-wrap: break-word;
}
</style>
