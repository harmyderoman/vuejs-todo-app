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
import notes from "../data";
import TodoItem from "../components/TodoItem";

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
        noteId: notes.length+1,
        title: "",
        todos: [],
      },
    };
  },
  mounted() {
    if (this.noteId) {
      this.note = JSON.parse(
        JSON.stringify(notes.find((note) => note.noteId == this.noteId))
      );
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
      if (this.noteId) {
        let index = notes.findIndex((note) => note.noteId == this.noteId);
        notes[index] = this.note;
      } else {
        notes.push(this.note);
      }
      this.$router.push("/");
    },
    cancelEdit() {
      this.$router.push("/");
    },
    deleteNote() {
      let index = notes.findIndex((note) => note.noteId == this.note.noteId);

      notes.splice(index, 1);
      this.$router.push("/");
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
          // console.log("Watch get:");
          // console.log(JSON.stringify(this.noteHistory));
          this.histotyIndex = this.noteHistory.length - 1;
          // console.log("histotyIndex: " + this.histotyIndex);
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
