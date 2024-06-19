// my-app\src\store\store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [], // List of products
    cart: [] // Items in the cart
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    }
  },
  getters: {
    cartItems: state => state.cart
  }
});