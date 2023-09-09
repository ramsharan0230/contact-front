// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components/views
import Home from '../views/Home.vue'
import AddContact from '../views/AddContact.vue'
import UpdateContact from '../components/UpdateContact.vue'
import UploadCSV from '../views/UploadCSV.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/add-contact',
    name: 'add-contact',
    component: AddContact,
  },
  {
    path: '/edit-contact/:id',
    name: 'edit-contact',
    component: UpdateContact,
  },

  {
    path: '/upload-csv',
    name: 'upload-csv',
    component: UploadCSV,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;