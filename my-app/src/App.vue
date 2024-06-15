<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CounterState />
  <SampleRoute />
</template>

<script>
import CounterState from './components/CounterState.vue';
import SampleRoute from './components/SampleRoutes.vue'

export default {
  name: 'App',
  components: {
    CounterState,
    SampleRoute
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
