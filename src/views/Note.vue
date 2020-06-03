<template>
  <div class="note-page">
    <h1>Note Page {{ $route.params.noteId }}</h1>
    <h2>{{ note.title }}</h2>
    <input v-model="note.title" type="text" placeholder="Enter new title..."/>
    <hr />
    <div>
      <button>Undo</button>
      <button>Redo</button>
    </div>
    <ul>
      <li>
        <todo-item v-for="todo in note.todos" :todo="todo"  :key="todo.id"/>
        <!-- <input type="checkbox" />
        <span>todo</span>
        <button>Edit Todo</button>
        <button>Delete Todo</button> -->
      </li>
    </ul>
    <button>Add Todo</button>
    <hr />
    <div>
      <button>Save</button>
      <button>Cancel</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import notes from '../data'
import TodoItem from '../components/TodoItem'

export default {
  name: "Note",
  components: {
    "todo-item": TodoItem
  },
  data() {
    return {
      noteId: this.$route.params.noteId,
      note: {
          noteId: notes.length + 1,
          title: '',
          todos: []
        }
    };
  },
  mounted() {
      if(this.noteId){
        this.note = notes.find(note => note.noteId == this.noteId)
      }
    
  }
};
</script>

<style></style>
