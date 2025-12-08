// import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue'
import App from './App.vue'
import ContactUs from './components/ContactUs.vue';
const app = createApp(App);
app.component('contact-us', ContactUs);
app.mount('#app');
