<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="increment">count is: {{ count }}</button>
    <p>doubleCount is: {{ doubleCount }}</p>
    <FormComponent />
    <ChildLayout />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import FormComponent from './components/FormComponent.vue';
import ChildLayout from './components/ChildLayout.vue';
import { ref, computed } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    FormComponent,
    ChildLayout
  },
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    const doubleCount = computed(() => count.value * 2);

    return {
      count,
      increment,
      doubleCount
    };
  }
}
</script>