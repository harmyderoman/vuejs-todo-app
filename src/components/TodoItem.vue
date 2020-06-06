<template>
  <li>
    <div class="todo-body">
      <input v-model="todo.completed" type="checkbox" />
      <span v-if="!editable" @click="editable = !editable">
        {{ todo.text ? todo.text : "Click to edit Todo"}} </span>
        <input
        v-else
        type="text"
        v-model="todo.text"
        v-on:keyup.enter="editable = !editable"
      />
    </div>

    <div class="todo-actions">
      <button @click="editable = !editable">
        {{ editable ? "Save" : "Edit Todo" }}
      </button>
      <button @click="$emit('remove-todo', todo)">Delete Todo</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  data() {
    return {
      editable: false,
    };
  },
  mounted() {},
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  background-color: #cecece;
  height: 32px;
  margin: 5px 0px;
  padding-top: 2px;
  padding-left: 10px;
  padding-right: 15px;
  border-radius: 5px;
}
</style>
