<template>
    <div>
      <h2>Products</h2>
      <ul>
        <li v-for="(product, index) in products" :key="index">
          {{ product.name }} - {{ product.price }}
          <button @click="addToCart(product)">Add to Cart</button>
        </li>
      </ul>
  
      <h2>Cart</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.price }}
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'ShoppingList',
    computed: {
      ...mapGetters(['cartItems']),
      products() {
        // Replace with actual product fetching logic
        return [
          { name: 'Product A', price: 100 },
          { name: 'Product B', price: 200 },
          // Add more products as needed
        ];
      }
    },
    methods: {
      ...mapActions(['addToCart', 'removeFromCart'])
    }
  };
  </script>  