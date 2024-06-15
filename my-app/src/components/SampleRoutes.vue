<template>
    <!-- The router-view component renders the matched component for the given path -->
    <router-view></router-view>    
  </template>
  
  <script>
  import { createRouter, createWebHistory } from 'vue-router';
  import HomeComponent from './Routes/Home.vue';
  import AboutComponent from './Routes/About.vue';
  import ContactComponent from './Routes/Contact.vue';
  
  // Define routes for each component
  const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent },
  ];
  
  // Create a router instance with history mode and routes defined above
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default {
    name: 'SampleRoute',
    // Make sure to return the router instance
    setup() {
      return { router };
    }
  };
  </script>  