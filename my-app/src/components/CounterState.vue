<template>
    <div>
      <!-- Displaying the current count -->
      <p>You clicked {{ count }} times</p>
      <!-- When button is clicked, `increment` method is called to increment the count -->
      <button @click="increment">
        Click me
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'CounterState',
    setup() {
      // `ref` is used to define a reactive reference for our state.
      // Here we're creating a reactive variable `count`.
      const count = ref(0);
  
      // A method to increment the count
      const increment = () => {
        count.value++;
      };
  
      // Expose the state and method to the template
      return { count, increment };
    }
  };
  </script>  