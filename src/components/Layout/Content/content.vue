<template>
    <div class="todo-container">
        <TodoInput @get-todo="getTodo"></TodoInput>
        <TodoList :title="saveContent" @show-todo-list="showTodoList"></TodoList>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import TodoList from '../../Tool/TodoList.vue';
import TodoInput from '../../Tool/TodoInput.vue';
const saveContent = ref<string>('');
let showTodoList = (todoList: any) => {
    console.log(todoList);
}
let getTodo = (newTodo: string) => {
    saveContent.value = newTodo;
}
</script>
<style lang='scss' scoped>
$inputColor : #f3f4f7;
$placeholderColor : #c1c1c4;

$outlineColor :#4772fa;

@include b(container) {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 0 10px;
    height: 85vh; // pin here
    overflow: auto;
    position: relative;

    @media screen and (max-width: 500px) {
        width: 100%;
    }
}
</style>