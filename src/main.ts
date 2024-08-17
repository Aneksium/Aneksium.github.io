import { createApp } from 'vue'
import App from './App.vue'
import router from './utils/router'
import axios from 'axios';
import store from './store';

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_BASE_BACKEND_URL || '/api'
console.log(axios.defaults.baseURL)

createApp(App).use(router).use(store).mount('#app')
