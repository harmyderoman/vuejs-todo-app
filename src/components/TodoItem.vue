<template>
  <li>
    <input v-model="todo.completed" type="checkbox" />
    <span v-if="!editable" @click="editable=!editable">{{ todo.text }}</span>
    <input v-else type="text" v-model="todo.text" v-on:keyup.enter="editable=!editable" />
    <button @click="editable=!editable">{{ editable? "Save": "Edit Todo"}}</button>
    <button @click="$emit('remove-todo', todo)">Delete Todo</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  data(){
    return {
      editable: false,
    }
  },
  mounted() {
  }
};
</script>

<style></style>
