<!-- my-app\src\components\EventBusA.vue -->
<template>
    <button @click="sendEvent">Send Event</button>
</template>

<script>
import { EventBus } from './eventBus';

export default {
    name: 'EventBusA',
    methods: {
        sendEvent() {
            EventBus.$emit('custom-event', 'Hello from Component A!');
        }
    }
}
</script>