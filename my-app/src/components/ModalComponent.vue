<!-- my-app\src\components\ModalComponent.vue -->
<template>
    <div v-if="isVisible" class="modal">
        <div class="modal-content">
            <slot>
                <p>This is the default content</p>
                <button @click="$emit('close')">Close</button>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalComponent',
    props: {
        isVisible: Boolean
    },
    emits: ['close']
}
</script>