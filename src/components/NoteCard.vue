<template>
  <div class="note">
    <h1>{{  note.title }}</h1>
    <ul>
      <li v-for="todo in note.todos" :key="todo">
        {{ todo.todo }}
      </li>
    </ul>
    <div class="note--actions">
      <button to="/note">Go to Note</button>
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

</style>