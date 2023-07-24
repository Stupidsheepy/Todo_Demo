<template>
    <div class="todo-sider">
        <div class="todo-sider__header">{{ siderTitle }}</div>
        <div class="todo-sider__content">
            Here is some discription about this todo.
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, watch } from 'vue';
import getRandColor from '../../../utils/Get_RandColor';
const headerColor = ref<string>(getRandColor());
const siderTitle = ref<string>('Todo Title');
const props = defineProps<{
    selectedTodo: string
}>();
watch(props, () => {
    siderTitle.value = props.selectedTodo;
    headerColor.value = getRandColor();
})
</script>
<style lang='scss' scoped>
@include b(sider) {
    width: 30%;
    border-left: 1px solid #ccc;

    @include e(header) {
        color: v-bind(headerColor);
        font-size: 15px;
        text-align: center;
        padding: 10px;
        font-size: 40px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }

    @include e(content) {
        padding: 10px;
        color: #ccc;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
}
</style>