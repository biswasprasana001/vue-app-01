<!-- my-app\src\components\ParentLayout.vue -->
<template>
    <LayoutComponent>
        <template v-slot:header>
            <!-- Your header component goes here -->
            <HeaderComponent />
        </template>

        <!-- Your main content goes here -->
        <ContentComponent />

        <template v-slot:footer>
            <!-- Your footer component goes here -->
            <FooterComponent />
        </template>
    </LayoutComponent>
</template>

<script>
import LayoutComponent from './LayoutComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
import ContentComponent from './ContentComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
    components: {
        LayoutComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent
    }
}
</script>