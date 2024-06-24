<template>
    <BaseLayout>
      <!-- Fill the header slot -->
      <template v-slot:header>
        <h1>Welcome to My Website</h1>
      </template>
  
      <!-- Fill the default slot -->
      <p>This is the main content of the page.</p>
  
      <!-- Fill the footer slot -->
      <template v-slot:footer>
        <p>Contact us at contact@example.com</p>
      </template>
    </BaseLayout>
  </template>
  
  <script>
  import BaseLayout from './BaseLayout.vue';';
  
  export default {
    name: 'ChildLayout',
    components: {
      BaseLayout
    }
  };
  </script>
  