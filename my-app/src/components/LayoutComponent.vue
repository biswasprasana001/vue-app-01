<!-- my-app\src\components\LayoutComponent.vue -->
<template>
    <div class="layout">
        <header>
            <!-- Named slot for header -->
            <slot name="header"></slot>
        </header>
        <main>
            <!-- Default slot for content -->
            <slot></slot>
        </main>
        <footer>
            <!-- Named slot for footer -->
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'LayoutComponent'
}
</script>