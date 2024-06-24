<template>
    <form @submit.prevent="submitForm">
      <input v-model="username" placeholder="Enter your username">
      <input type="password" v-model="password" placeholder="Enter your password">
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
  
      const submitForm = () => {
        console.log('Username:', username.value);
        console.log('Password:', password.value);
        // Handle the form submission, e.g., send data to a server
      };
  
      return {
        username,
        password,
        submitForm
      };
    }
  };
  </script>  