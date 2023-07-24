<template>
    <div class="todo-list__header--unCompleted">
        <todo-icon class="fa-xl icon-02 icon" :icon="faIcon_01" @click="isShowUncompletedList = !isShowUncompletedList"
            :style="faIconStyles"></todo-icon> <span :style="fontStyles"
            @click="isShowUncompletedList = !isShowUncompletedList">Uncompleted
            Todos</span>
    </div>
    <div class="todo-list un-todo-list">
        <div class="todo-list__item" :class="{ selected: currentItem === item.id }" v-for="(item) in UncompletedList"
            :key="item.id" @click="currentItem = item.id">
            <div class="todo-list__item--icon">

                <todo-icon v-if="!item.isDone" :icon="faSquare" @click="deleteTodo(item.id)"
                    @mouseover="changeIconBoxColor(true, $event)" @mouseout="changeIconBoxColor(false, $event)"
                    :style="{ color: 'dodgerblue' }"></todo-icon>
                <todo-icon v-if="item.isDone" :icon="faCheckSquare"></todo-icon>
            </div>
            <div class="todo-list__item--text">
                {{ item.title }}
            </div>
        </div>
    </div>
    <div class="todo-list__header--Completed">
        <todo-icon class="fa-xl icon-02 icon" :icon="faIcon_02" @click="isShowcompletedList = !isShowcompletedList"
            :style="faIconStyles"></todo-icon> <span :style="fontStyles"
            @click="isShowcompletedList = !isShowcompletedList">Completed
            Todos</span>
    </div>
    <div class="todo-list com-todo-list" :style="{ color: 'grey' }">
        <div class="todo-list__item" :class="{ selected: item.id === currentItem }" v-for="(item) in CompleteList"
            :key="item.id" @click="currentItem = item.id">
            <div class="todo-list__item--icon">
                <todo-icon v-if="item.isDone" :icon="faCheckSquare" @mouseover="changeIconBoxColor(true, $event)"
                    @mouseout="changeIconBoxColor(false, $event)" @click="item.isDone = !item.isDone"></todo-icon>
            </div>
            <div class="todo-list__item--text">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import {
    ref, watch, computed, inject
} from 'vue';
import type { Ref } from 'vue';
import Get_UUID from '../../utils/Get_UUID';
// const emit = defineEmits(['show-todo-list', 'show-todo-detail', 'get-sider-title']);

const props = withDefaults(defineProps<{ title: string }>(), {
    title: 'todo list'
});
const faSquare = ref(['far', 'square']);
const faCheckSquare = ref(['far', 'check-square']);
const faIcon_01 = ref(['fas', 'chevron-down']);
const faIcon_02 = ref(['fas', 'chevron-right']);
const fontStyles = ref({
    fontWeight: 'bolder',
    fontSize: '15px',
    cursor: 'pointer'
})
const faIconStyles = ref({
    color: 'grey',
    fontSize: '15px'
})
let changeIconBoxColor = (isChange: boolean, event: any) => {
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
        id: Get_UUID(),
        title: 'Sleeping',
        isDone: false,
        important: "high"
    }, {
        id: Get_UUID(),
        title: 'Eating',
        isDone: false,
        important: "mid"
    }, {
        id: Get_UUID(),
        title: 'Coding',
        isDone: false,
        important: "low"
    },
]);
let CompleteList = computed(() => todoList.value.filter(item => item.isDone === true));
let UncompletedList = computed(() => todoList.value.filter(item => item.isDone === false));
// const send = () => {
//     emit('show-todo-list', todoList.value);
// }
let deleteTodo = (id: string) => { // pin here some bugs
    console.log('deleteTodo');
    const index = todoList.value.findIndex(item => item.id === id);
    todoList.value[index].isDone = true;
}
// watch props and push into todoList
watch(props, (newValue) => {
    todoList.value.push({
        id: Get_UUID(),
        // id: String(todoList.value.length + 1), error-methods
        title: newValue.title,
        isDone: false,
        important: "high"
    })
});

 watch(isShowUncompletedList, () => {
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
 watch(isShowcompletedList, () => {
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

// send to sider
const selectedTodo = inject<Ref<any>>('selectedTodo');
const currentItem = ref<string>('');
watch(currentItem, (newValue: string) => {
    console.log(currentItem.value);
    todoList.value.forEach(item => {
        if (item.id === newValue) {
            selectedTodo!.value = item.title;
        }
    })
})
</script>
<style lang='scss' scoped>
$selectColor: #e7ecfa;
$hoverColor: #f1f4ff;

.un-todo-list {
    height: v-bind(unComHeightVar)
}

.com-todo-list {
    height: v-bind(comHeightVar)
}

.selected {
    background: $selectColor;
}

@include b(list) {
    width: 90%;
    overflow-y: auto;

    @include e(header) {
        @include m(unCompleted) {
            align-self: flex-start;
        }

        @include m(Completed) {
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
        &:hover {
            background: $hoverColor;
        }

        @include m(text) {}

        @include m(icon) {
            margin-left: 10px;
        }
    }


}
</style>