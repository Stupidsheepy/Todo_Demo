<template>
    <div class="todo-container">
        <div class="todo-inputContainer">
            <!-- no v-model saveContent cause every change sends -->
            <input type="text" class="todo-input" :placeholder="placeholderWords" @keydown.enter="saveTodo"
                @focus="showIcon(true)" @blur="showIcon(false)" v-model="inputContent" />
            <todo-icon :class="iconShowClass" class="fa-xl icon-01 icon" :icon="['far', 'calendar-days']"
                :style="iconStyles[0]" @mouseover="changeIconColor(true, 0)"
                @mouseout="changeIconColor(false, 0)"></todo-icon>
            <todo-icon :class="iconShowClass" class="fa-xl icon-02 icon" :icon="['fas', 'chevron-down']"
                :style="iconStyles[1]" @mouseover="changeIconColor(true, 1)"
                @mouseout="changeIconColor(false, 1)"></todo-icon>
        </div>
        <TodoList :title="saveContent" @show-todo-list="showTodoList"></TodoList>

    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted, onBeforeMount } from 'vue';
import TodoList from '../../Tool/TodoList.vue'
const placeholderWords = ref<string>('+添加任务至“收集箱”，回车即可创建');
// todo show modules
const inputContent = ref<string>('');
const saveContent = ref<string>('');
let saveTodo = () => {
    console.log('saveTodo');
    // TODO 保存todo
    saveContent.value = inputContent.value;
    console.log(saveContent.value);
    inputContent.value = '';
}
let showTodoList = (todoList: any) => {
    console.log(todoList);
}

// icon modules
const iconShowClass = ref<string>('hidden');
const iconStyles = ref([
    { color: '#c1c1c4' },
    {
        color: '#c1c1c4'
    }
]);
let showIcon = (show: boolean) => {
    if (show === true) {
        console.log('nihao');
        iconShowClass.value = '';
    } else {
        iconShowClass.value = 'hidden';
    }
}
let changeIconColor = (isChange: boolean, num: number) => {
    if (isChange === true) {
        iconStyles.value[num].color = '#4772fa';
    } else {
        iconStyles.value[num].color = '#c1c1c4';
    }
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
    border-right: 1px solid #ccc;

    @media screen and (max-width: 500px) {
        width: 100%;
    }
}

@include b(inputContainer) {
    position: relative;
    width: 100%;
    min-height: 50px; // pin here why???
}

@include b(input) {

    // background-color: $inputColor;
    background: {
        color: $inputColor;
    }

    width: 100%;
    height: 100%;

    outline: {
        color: $outlineColor;
        offset: -2px; // pin here
    }

    font-size: 20px;
    border:none;
    border-radius: 4px;

    padding: 0 10px;

    &::placeholder {
        color: $placeholderColor;
        font-size: smaller;
    }
}


.hidden {
    display: none;
}

.icon {
    position: absolute;
    top: 20%;

}

.icon-02 {
    right: 2%;
}

.icon-01 {
    right: 6%;
}

@media screen and (max-width: 500px) {
    .icon-01 {
        right: 14%;
    }

    .icon-02 {
        right: 5%;
    }
}
</style>