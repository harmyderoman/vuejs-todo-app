<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <ul>
      <li
        :class="todo.completed ? 'todo-completed' : ''"
        v-for="todo in note.todos"
        :key="todo.id"
      >
        {{ todo.text }}
      </li>
    </ul>
    <div class="note_actions">
      <icon-button 
        type="edit" 
        color="orange" 
        @action="goToNote"
        label="Edit Note"
        >
        Edit Note
        </icon-button>
      <icon-button
        type="delete_outline"
        color="red"
        @action="$emit('delete-note', note.noteId)"
        label="Delete"
        >
        Delete
        </icon-button>
    </div>
    <hr />
  </div>
</template>

<script>
import IconButton from "../components/IconButton";

/**
 * @module NoteCard showing note in list on main page
 */
export default {
  name: "NoteCard",
  props: {
    note: Object,
  },
  components: {
    "icon-button": IconButton,
  },
  methods: {
    goToNote() {
      this.$router.push(`/note/${this.note.noteId}`);
    },
  },
};
</script>

<style>
.todo-completed {
  text-decoration: line-through;
}
.note {
  text-align: center;
}
</style>
