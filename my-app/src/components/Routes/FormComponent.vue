<template>
    <form @submit.prevent="handleSubmit">
      <!-- Email input field -->
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
        <!-- Display error message for email -->
        <p v-if="errors.email">{{ errors.email }}</p>
      </div>
  
      <!-- Password input field -->
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
        <!-- Display error message for password -->
        <p v-if="errors.password">{{ errors.password }}</p>
      </div>
  
      <!-- Submit button -->
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'FormComponent',
    setup() {
      const email = ref('');
      const password = ref('');
      const errors = ref({});
  
      // Function to validate form fields
      const validateForm = () => {
        let isValid = true;
        let localErrors = {};
  
        if (!email.value) {
          isValid = false;
          localErrors['email'] = 'Email is required';
        }
  
        if (!password.value) {
          isValid = false;
          localErrors['password'] = 'Password is required';
        }
  
        errors.value = localErrors;
        return isValid;
      };
  
      // Function to handle form submission
      const handleSubmit = () => {
        if (validateForm()) {
          // If the form is valid, submit the data
          fetch('https://api.example.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email.value, password: password.value }),
          })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
              // Handle success response
            })
            .catch((error) => {
              console.error('Error:', error);
              // Handle errors here
            });
        }
      };
  
      return { email, password, errors, handleSubmit };
    }
  };
  </script>  