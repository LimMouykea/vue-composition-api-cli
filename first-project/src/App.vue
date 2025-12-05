<template>
  <div>
    <!-- 
      Ref : Primitive Data Types (String, Number, Boolean)
      Reactive : Non-Primitive Data Types (Object, Array)
      v-once : Renders the element and component only once. Subsequent re-renders will not affect the element or component.
      v-if : Conditionally renders the element based on the truthiness of the expression.
      v-bind : Dynamically binds one or more attributes, or a component prop to an expression.
     -->
    <h1>Number is: {{ number }}</h1>
    <h1 v-once>Number(using v-once) is: {{ number }}</h1>
    <h1>object :  {{ object.name }}</h1>
    <div class="box" v-if="isShow">
      dfgdfgj
    </div>
    <p>{{ text }}</p>
    <p :style="{'color' : color }">{{ characters }}</p>
    <button @click="btnToggle">{{ boxStatus }}</button>
    <button @click="increaseNum">Increase Number</button>
    <button @click="changeText">Change Text</button>
    <button @click="updateObject">Change Object</button>
  </div>
</template>
<script setup>
import { ref , reactive } from 'vue';
let number = ref(0);
let text = ref("Hello Vue 3!");
let color = ref("blue");
let isShow = ref(false);
let boxStatus = ref("Show Box");
let characters = ref("Start the second project");
let object = reactive({ name: "Vue", version: 3 });
function btnToggle() {
  isShow.value = !isShow.value;
  boxStatus.value = isShow.value ? "Hide Box" : "Show Box";
}
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
<style>
  .box{
    width: 400px;
    height: 400px;
    background-color: rgb(163, 246, 227);
    margin-bottom: 10px;
  }
</style>