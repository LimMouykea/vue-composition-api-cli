<template>
  <div>
    <!-- 
      Ref : Primitive Data Types (String, Number, Boolean)
      Reactive : Non-Primitive Data Types (Object, Array)
      v-once : Renders the element and component only once. Subsequent re-renders will not affect the element or component.
      v-if : Conditionally renders the element based on the truthiness of the expression.
      v-bind : Dynamically binds one or more attributes, or a component prop to an expression.
     -->
    <!-- <h1>Number is: {{ number }}</h1>
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
    <button @click="updateObject">Change Object</button>-->
    <p v-html="vHTML"></p>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <h3>Your Full Name is: {{ fullname }}</h3>
    <button @click="increment">Increase Count Ref</button>
    <button @click="incrementReactive">Increase Count Reactive</button>

  </div>
</template>
<script setup>
import {computed, ref, reactive, watch } from 'vue';
let firstName = ref('');
console.log(firstName);
let lastName = ref('');
let vHTML = '<h1>This is Vue 3</h1>';
let fullname = computed(() => {
  return firstName.value + ' ' + lastName.value;
})
// let number = ref(0);
// let text = ref("Hello Vue 3!");
// let color = ref("blue");
// let isShow = ref(false);
// let boxStatus = ref("Show Box");
// let characters = ref("Start the second project");
// let object = reactive({ name: "Vue", version: 3 });
// function btnToggle() {
//   isShow.value = !isShow.value;
//   boxStatus.value = isShow.value ? "Hide Box" : "Show Box";
// }
// function increaseNum() {
//   number.value++;
// }
// function changeText() {
//   text.value = "Text Changed!";
// }
// function updateObject() {
//   object.name = "Vue.js";
// }

// Watch With Ref
let count = ref(0); 
function increment() {
  count.value++;
}
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});

// Watch With Reactive
let countReactive = reactive({ count: 0 });
function incrementReactive() {
  countReactive.count++;
}
watch(() => countReactive.count, (newVal, oldVal) => {
  console.log(`Reactive Count changed from ${oldVal} to ${newVal}`);
});

</script>
<style>
  .box{
    width: 400px;
    height: 400px;
    background-color: rgb(163, 246, 227);
    margin-bottom: 10px;
  }
</style>