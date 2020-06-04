<template>
  <div class="note-page">
    <h1>Note Page {{ $route.params.noteId }}</h1>
    <h2>{{ note.title }}</h2>
    <input v-model="note.title" type="text" placeholder="Enter new title..." />
    <hr />
    <div>
      <button @click="undo" :disabled="!(this.histotyIndex > 0)">Undo</button>
      <button @click="redo" :disabled="!(this.histotyIndex < (this.noteHistory.length - 1))">Redo</button>
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
      <button @click="deleteNote">Delete</button>
    </div>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
import { NoteService } from '../services/NoteService'
import { random } from '../utils'

export default {
  name: "Note",
  components: {
    "todo-item": TodoItem,
  },
  data() {
    return {
      noteHistory: [],
      histotyIndex: 0,
      watching: true,
      noteId: this.$route.params.noteId,
      note: {
        noteId: "",
        title: "",
        todos: [],
      },
    };
  },
  mounted() {
    if (this.noteId) {
      this.note = NoteService.getItemById(this.noteId)
    } else {
      this.note.noteId = random()
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
      let i = this.note.todos.indexOf(todo);
      this.note.todos.splice(i, 1);
    },
    saveNote() {
      NoteService.updateItem(this.note.noteId, this.note)
    },
    cancelEdit() {
      this.clearNote()
      this.$router.push("/");
    },
    deleteNote() {
      NoteService.removeItem(this.noteId)
      this.clearNote()
      this.$router.push("/");

    },
    clearNote(){
      this.note = {
        noteId: "",
        title: "",
        todos: [],
      }
    },
    undo() {
      this.watching = false;
      if (this.histotyIndex > 0) {
        this.histotyIndex -= 1;
        this.note = this.noteHistory[this.histotyIndex];
      }
    },
    redo() {
      this.watching = false;
      if (this.histotyIndex < (this.noteHistory.length - 1)) {
        this.histotyIndex += 1;
        this.note = this.noteHistory[this.histotyIndex];
      }
    },
  },
  watch: {
    note: {
      handler: function(val) {
        if (this.watching) {
          this.noteHistory.push(JSON.parse(JSON.stringify(val)));
          this.histotyIndex = this.noteHistory.length - 1;
        } else {
          this.watching = true;
        }
      },
      deep: true,
    },
  },
};
</script>

<style></style>
