<template>
    <div class="todo-layout">
        <Header></Header>
        <div class="todo-mainContainer">
            <Content>
            </Content>
            <Sider :selectedTodo="selectedTodo"></Sider>
        </div>
    </div>
</template>
<script setup lang='ts'>
import Header from './Header/header.vue'
import Sider from './Sider/sider.vue'
import Content from './Content/content.vue'
import { provide, ref } from 'vue';

const selectedTodo = ref<string>('Todo Title')
provide('selectedTodo', selectedTodo);
</script>
<style lang='scss' scoped>
@include b(layout) {
    @include bfc;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

@include b(mainContainer) {
    display: flex;
    flex: 1;
}
</style>