<template>
    <div>{{ message }}</div>
</template>

<script>
import { EventBus } from './eventBus';

export default {
    name: 'EventBusB',
    data() {
        return {
            message: ''
        };
    },
    created() {
        EventBus.$on('custom-event', (payload) => {
            this.message = payload;
        });
    }
}
</script>