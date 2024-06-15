<template>
    <div>
      <!-- Using v-bg-color directive to change this div's background color on mount -->
      <div v-bg-color="'lightblue'">
        This div has a light blue background.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundColorComponent',
    directives: {
      // Custom directive called 'bg-color'
      'bg-color': {
        // Directive's "mounted" hook is called when the bound element is inserted into the DOM.
        mounted(el, binding) {
          el.style.backgroundColor = binding.value; // Set background color based on directive's value
        }
      }
    }
  };
  </script>  