<template>
  <li>
    <div class="todo-body">
      <input v-model="todo.completed" type="checkbox" />
    </div>
    <div>
      <span
        :class="{ completed: todo.completed }"
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
      />
    </div>
    <slot></slot>

    <div class="todo-actions">
      <icon-button
        @action="editable = !editable"
        :type="editable ? 'save_alt' : 'edit'"
        :color="editable ? 'green' : 'orange'"
      >
      </icon-button>
      <icon-button
        color="red"
        type="delete_forever"
        @action="$emit('remove-todo', todo)"
      ></icon-button>
    </div>
  </li>
</template>

<script>
import IconButton from "../components/IconButton";

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
  mounted() {},
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  background-color: #cecece;
  height: 36px;
  margin: 5px 0px;
  padding-top: 6px;
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
}
input[type="text"] {
  width: auto;
  max-width: 150px;
  height: 25px;
  padding: 4px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  /* font-size: ; */
  font-family: cursive, sans-serif;
  color: #8a8a8a;
}
input:focus {
  outline: #a3ccad auto 1px;
}
</style>
