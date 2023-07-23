<template>
    <div class="todo-sider">
        <div class="todo-sider__header">Your Todo's title</div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style lang='scss' scoped>
@include b(sider) {
    width: 30%;

    @include e(header) {
        font-size: 15px;
        text-align: center;
        padding: 10px;
        font-size: 40px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
}
</style>