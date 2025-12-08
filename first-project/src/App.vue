<template>
  <div>
    <!-- <div class="container">
      <div class="row">
        <div class="col-12" v-for="prop in props" :key="prop.name">
          <CardComponent  @update-fav="toggleBtn" :isFav="prop.isFav" :name="prop.name" :email="prop.gmail" :phone="prop.phone" :owner="prop.owner" />
        </div>
      </div>
    </div>
    <ChildBox :msg="msg" @reply="replyMessage"/> -->
    <h1>Dark Mode : {{ isActive }}</h1> 
    <ChildMode :isActive="isActive" @toggleMode="toggleMode"/>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import CardComponent from './components/CardComponent.vue';
import ChildBox from './components/ChildBox.vue';
import ChildMode from './components/ChildMode.vue';
const isActive = ref(true);
function toggleMode() {
  isActive.value = !isActive.value;
}



const msg = "Hello child!";
function replyMessage(text) {
  console.log("Child says , ", text);
}
function toggleBtn() {
  alert('ghfghjjkj');
}
let props = reactive([
  {
    name: 'MouykeaLim',
    gmail: "Mouykea@gmail.com",
    phone: "439584545",
    owner: "MK",
    isFav: true,
  },
  {
    name: 'MouykeaLim',
    gmail: "Mouykea@gmail.com",
    phone: "439584545",
    owner: "MK",
    isFav: false,
  },
  {
    name: 'MouykeaLim',
    gmail: "Mouykea@gmail.com",
    phone: "439584545",
    owner: "MK",
    isFav: true,
  },
  {
    name: 'MouykeaLim',
    gmail: "Mouykea@gmail.com",
    phone: "439584545",
    owner: "MK",
    isFav: false,
  },
]);
</script>
