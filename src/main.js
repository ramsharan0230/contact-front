import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/routes';

import axiosReq from '@/axios';

import Popper from 'popper.js';
window.Popper = Popper;

const app = createApp(App);

app.config.globalProperties.$axiosReq = axiosReq;

app.use(router); // Use the router configuration

app.mount('#app');
