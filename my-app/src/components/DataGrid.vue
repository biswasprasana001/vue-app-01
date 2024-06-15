<template>
    <div>
      <!-- Display a loading message when fetching data -->
      <p v-if="isLoading">Loading...</p>
      <!-- Display an error message if there's an error -->
      <p v-if="error">Error: {{ error }}</p>
      <!-- Display the data in a grid layout -->
      <div v-else style="display: grid; gridTemplateColumns: repeat(3, 1fr); gap: 10px;">
        <div v-for="item in data" :key="item.id" style="border: 1px solid #ccc; padding: 10px;">
          <!-- Display item details -->
          <p>{{ item.name }}</p>
          <p>{{ item.detail }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'DataGrid',
    setup() {
      const data = ref([]);
      const isLoading = ref(false);
      const error = ref(null);
  
      // `onMounted` is called when the component is mounted to the DOM
      onMounted(() => {
        isLoading.value = true; // Set loading to true before starting the fetch
        fetch('https://api.example.com/data')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(jsonData => {
            data.value = jsonData; // Set the data
            isLoading.value = false; // Set loading to false after the data is received
          })
          .catch(err => {
            error.value = err.message; // Set error message if there's an error
            isLoading.value = false; // Ensure loading is false if there's an error
          });
      });
  
      return { data, isLoading, error };
    }
  };
  </script>  