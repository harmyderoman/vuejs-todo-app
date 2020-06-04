<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <ul>
      <li :class="todo.completed?'completed':''" v-for="todo in note.todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
    <div class="note--actions">
      <button @click="goToNote">Edit Note</button>
      <button @click="$emit('delete-note', note.noteId)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: Object
  },
  methods: {
    goToNote(){
      this.$router.push(`/note/${this.note.noteId}`)
    }
  }

}
</script>

<style>
.completed{
  text-decoration: line-through;
}
</style>