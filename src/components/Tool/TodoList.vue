<template>
    <div class="todo-list__header--unCompleted">
        <todo-icon class="fa-xl icon-02 icon" :icon="faIcon_01"
            @click="isShowUncompletedList = !isShowUncompletedList"></todo-icon> Uncompleted Todos
    </div>
    <div class="todo-list un-todo-list">
        <div class="todo-list__item" v-for="(item, index) in UncompletedList" :key="item.id">
            <div class="todo-list__item--icon">

                <todo-icon v-if="!item.isDone" :icon="faSquare" @click="deleteTodo(item.id)"
                    @mouseover="changeboxColor(true, index, $event)"
                    @mouseout="changeboxColor(false, index, $event)"></todo-icon>
                <todo-icon v-if="item.isDone" :icon="faCheckSquare" @mouseover="changeboxColor(true, index, $event)"
                    @mouseout="changeboxColor(false, index, $event)"></todo-icon>
            </div>
            <div class="todo-list__item--text">
                {{ item.title }}
            </div>
        </div>
    </div>
    <div class="todo-list__header--unCompleted">
        <todo-icon class="fa-xl icon-02 icon" :icon="faIcon_02"
            @click="isShowcompletedList = !isShowcompletedList"></todo-icon> Completed Todos
    </div>
    <div class="todo-list com-todo-list">
        <div class="todo-list__item" v-for="(item, index) in CompleteList" :key="item.id">
            <div class="todo-list__item--icon">
                <todo-icon v-if="item.isDone" :icon="faCheckSquare" @mouseover="changeboxColor(true, index, $event)"
                    @mouseout="changeboxColor(false, index, $event)" @click="item.isDone = !item.isDone"></todo-icon>
            </div>
            <div class="todo-list__item--text">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted, onBeforeMount, watch, watchEffect, computed } from 'vue';
const props = withDefaults(defineProps<{ title: string }>(), {
    title: 'todo list'
});
const faSquare = ref(['far', 'square']);
const faCheckSquare = ref(['far', 'check-square']);
const faIcon_01 = ref(['fas', 'chevron-down']);
const faIcon_02 = ref(['fas', 'chevron-right']);
let changeboxColor = (isChange: boolean, index: number, event: any) => {
    if (isChange === true) {
        event.target.style.backgroundColor = '#dadfec';
    } else {
        event.target.style.backgroundColor = '#fff';
    }
}
const isShowUncompletedList = ref<boolean>(true);
const isShowcompletedList = ref<boolean>(false);
const unComHeightVar = ref('100%');
const comHeightVar = ref('0');
const todoList = ref([
    {
        id: '1',
        title: 'nihao',
        isDone: false,
        important: "high"
    }, {
        id: '2',
        title: 'sheep',
        isDone: false,
        important: "mid"
    }, {
        id: '3',
        title: 'doggy',
        isDone: false,
        important: "low"
    },
]);
let CompleteList = computed(() => todoList.value.filter(item => item.isDone === true));
let UncompletedList = computed(() => todoList.value.filter(item => item.isDone === false));
const emit = defineEmits(['show-todo-list', 'show-todo-detail']);
const send = () => {
    emit('show-todo-list', todoList.value);
}
let deleteTodo = (id: string) => { // pin here some bugs
    console.log('deleteTodo');
    const index = todoList.value.findIndex(item => item.id === id);
    todoList.value[index].isDone = true;
}
let unwatch = watch(props, (newValue) => {
    todoList.value.push({
        id: String(todoList.value.length + 1),
        title: newValue.title,
        isDone: false,
        important: "high"
    })
});

let unwatch2 = watch(isShowUncompletedList, () => {
    console.log('isShowUncompletedList');
    if (isShowUncompletedList.value === true) {
        console.log('true');
        unComHeightVar.value = '100%';
        faIcon_01.value = ['fas', 'chevron-down'];
    } else {
        console.log('false');
        unComHeightVar.value = '0';
        faIcon_01.value = ['fas', 'chevron-right'];
    }
});
let unwatch3 = watch(isShowcompletedList, () => {
    console.log('isShowcompletedList');
    if (isShowcompletedList.value === true) {
        console.log('true');
        comHeightVar.value = '100%';
        faIcon_02.value = ['fas', 'chevron-down'];

    } else {
        console.log('false');
        comHeightVar.value = '0';
        faIcon_02.value = ['fas', 'chevron-right'];

    }
});
// 传值
send();
</script>
<style lang='scss' scoped>
.un-todo-list {
    height: v-bind(unComHeightVar)
}

.com-todo-list {
    height: v-bind(comHeightVar)
}

@include b(list) {
    width: 90%;
    overflow-y: auto;

    @include e(header) {
        @include m(unCompleted) {
            align-self: flex-start;
        }
    }

    @include e(item) {
        height: 65px;
        border-bottom: 1px solid #ccc;
        margin: 10px 0;
        font-size: 25px;
        display: flex;
        align-items: center;
        gap: 10px;
        // border-radius: 4px;

        @include m(text) {}

        @include m(icon) {
            margin-left: 10px;
        }
    }


}
</style>