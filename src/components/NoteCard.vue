<template>
  <div class="note">
    <h1>{{  note.title }}</h1>
    <ul>
      <li :class="todo.completed?'completed':''" v-for="todo in note.todos" :key="todo">
        {{ todo.text }}
      </li>
    </ul>
    <div class="note--actions">
      <button to="/note">Edit Note</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: Object
  }

}
</script>

<style>
.completed{
  text-decoration: line-through;
}
</style>