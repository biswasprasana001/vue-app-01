<!-- my-app\src\App.vue -->
<template>
  <ModalComponent @close="closeModal" :isVisible="isVisible" />
  <button @click="isVisible = true" v-if="!isVisible">Open Modal</button>
  <FormComponent />
</template>

<script>

import ModalComponent from './components/ModalComponent.vue';
import FormComponent from './components/FormComponent.vue';

export default {
  name: 'App',
  components: {
    ModalComponent,
    FormComponent,
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    closeModal() {
      this.isVisible = false
    }
  }
}
</script>