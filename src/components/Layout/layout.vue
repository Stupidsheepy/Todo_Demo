<template>
    <div class="todo-layout">
        <Header></Header>
        <div class="todo-mainContainer">
            <Content>
            </Content>
            <Sider></Sider>
        </div>
    </div>
</template>
<script setup lang='ts'>
import Header from './Header/index.vue'
import Sider from './Sider/index.vue'
import Content from './Content/index.vue'
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