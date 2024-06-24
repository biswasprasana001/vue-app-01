<template>
    <div class="container">
      <header>
        <!-- We define a slot for the header -->
        <slot name="header"></slot>
      </header>
      <main>
        <!-- Default slot for main content -->
        <slot></slot>
      </main>
      <footer>
        <!-- Slot for the footer -->
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseLayout'
  };
  </script>
  