<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <ul>
      <li :class="todo.completed?'todo-completed':''" v-for="todo in note.todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
    <div class="note_actions">
      <icon-button type="edit" color="orange" @action="goToNote">Edit Note</icon-button>
      <icon-button type="delete_outline" color="red" @action="$emit('delete-note', note.noteId)">Delete</icon-button>
    </div>
    <hr/>
  </div>
</template>

<script>
import IconButton from '../components/IconButton'

export default {
  props: {
    note: Object
  },
  components: {
    "icon-button": IconButton
  },
  methods: {
    goToNote(){
      this.$router.push(`/note/${this.note.noteId}`)
    }
  }

}
</script>

<style>
.todo-completed{
  text-decoration: line-through;
}
.note{
  text-align: center;
}
</style>