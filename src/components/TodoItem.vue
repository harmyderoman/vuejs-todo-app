<template>
  <li>
    <div class="todo-body">
      <input v-model="todo.completed" type="checkbox" />
    </div>
    <div>
      <span
        :class="{ completed: (todo.completed&&todo.text) }"
        v-if="!editable"
        @click="editable = !editable"
      >
        {{ todo.text ? todo.text : "Click to edit Todo" }}
      </span>
      <input
        v-else
        type="text"
        v-model="todo.text"
        v-on:keyup.enter="editable = !editable"
        v-click-outside="setEditFalse"
      />
    </div>

    <div class="todo-actions">
      <icon-button
        @action="editable = !editable"
        :type="editable ? 'save_alt' : 'edit'"
        :color="editable ? 'green' : 'orange'"
        :label="editable ? 'Save' : 'Edit'"
      >
      </icon-button>
      <icon-button
        color="red"
        type="delete_forever"
        @action="$emit('remove-todo', todo)"
        label="Delete"
      ></icon-button>
    </div>
  </li>
</template>

<script>
import IconButton from "../components/IconButton";

/**
 * @module TodoItem editing and saving Todo item
 */
export default {
  name: "TodoItem",
  components: {
    "icon-button": IconButton,
  },
  props: {
    todo: Object,
  },
  data() {
    return {
      editable: false,
    };
  },
  methods: {
    setEditFalse(){
      this.editable = false
    }
  }
};
</script>

<style scoped>
span{
  word-wrap: none;
}
li {
  display: flex;
  flex-wrap: nowrap;
  background-color: #e2e2e2;
  height: 36px;
  margin: 5px 0px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 15px;
  border-radius: 5px;
}
.completed {
  text-decoration: line-through;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
input[type="text"] {
  width: auto;
  max-width: 180px;
  height: 25px;
  padding: 4px 10px;
  border: none;
  border-radius: 5px;
  font-family: cursive, sans-serif;
  color: #8a8a8a;
}
div{
  display: flex;
  justify-content: flex-start;
}
.todo-actions{
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 375px) {
  input[type="text"]{
    max-width: 150px;
  }
}
</style>
