<template>
    <div class="todo-header">Sheep's Todo Demo</div>
</template>
<script setup lang='ts'>

</script>
<style lang='scss' scoped>
@include b(header) {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 40px;
    margin-bottom: 20px;

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
}
</style>