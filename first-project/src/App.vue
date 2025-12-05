<template>
  <div>
    <h1>Number is: {{ number }}</h1>
    <h1>object :  {{ object.name }}</h1>
    <p>{{ text }}</p>
    <button @click="increaseNum">Increase Number</button>
    <button @click="changeText">Change Text</button>
    <button @click="updateObject">Change Object</button>
  </div>
</template>
<script setup>
import { ref , reactive } from 'vue';
let number = ref(0);
let text = ref("Hello Vue 3!");
let object = reactive({ name: "Vue", version: 3 });
function increaseNum() {
  number.value++;
}
function changeText() {
  text.value = "Text Changed!";
}
function updateObject() {
  object.name = "Vue.js";
}
</script>