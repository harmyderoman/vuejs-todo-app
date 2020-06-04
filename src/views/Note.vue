<template>
  <div class="note-page">
    <h1>Note Page {{ $route.params.noteId }}</h1>
    <h2>{{ note.title }}</h2>
    <input v-model="note.title" type="text" placeholder="Enter new title..." />
    <hr />
    <div>
      <button>Undo</button>
      <button>Redo</button>
    </div>
    <ul>
        <todo-item
          v-for="(todo, index) in note.todos"
          :todo="todo"
          :key="index"
          @remove-todo="onRemoveTodo"
        />
    </ul>
    <button @click="addTodo">Add Todo</button>
    <hr />
    <div>
      <button @click="saveNote">Save</button>
      <button @click="cancelEdit">Cancel</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import notes from "../data";
import TodoItem from "../components/TodoItem";

export default {
  name: "Note",
  components: {
    "todo-item": TodoItem,
  },
  data() {
    return {
      noteId: this.$route.params.noteId,
      note: {
        noteId: notes.length,
        title: "",
        todos: [],
      },
    };
  },
  mounted() {
    if (this.noteId) {
      this.note = JSON.parse(JSON.stringify(notes.find((note) => note.noteId == this.noteId)))
    }
  },
  methods: {
    addTodo() {
      this.note.todos.push({
        text: "New Todo",
        completed: false,
      });
    },
    onRemoveTodo(todo) {
      let i = this.note.todos.indexOf(todo)
      this.note.todos.splice(i, 1);
    },
    saveNote(){
      if(this.noteId){
        let index = notes.findIndex(note => note.noteId == this.noteId )
        notes[index] = this.note
        console.log(notes[index])
      } else{
        notes.push(this.note)
      }
    },
    cancelEdit(){
      this.$router.push('/')
    }
  },
};
</script>

<style></style>
