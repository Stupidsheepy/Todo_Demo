<template>
    <Layout>
    </Layout>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted, onBeforeMount } from 'vue';
import Layout from './components/Layout/layout.vue';
</script>
<style lang='scss'>
// scoped in App.vue is false
*,
html,
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#app {
    @include bfc;
}
</style>