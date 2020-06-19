<template>
  <div class="note-page">
    <note-title :note="note"/>
    <hr />
    <div>
      <icon-button 
        @action="undo" 
        type="undo"
        :disabled="!(this.histotyIndex > 0)"
        label="Undo"
        />
      <icon-button 
        @action="redo" 
        type="redo"
        :disabled="!(this.histotyIndex < (this.noteHistory.length - 1))"
        label="Redo"
      />
    </div>
    <ul>
      <todo-item
        v-for="(todo, index) in note.todos"
        :todo="todo"
        :key="index"
        @remove-todo="onRemoveTodo"
      />
    </ul>
    <div class="new-todo">
      <icon-button 
        color="orange" 
        type="add" 
        @action="addTodo"
        label="Add"
        ></icon-button>
      <span @click="addTodo">Add New Todo</span>
    </div>
    <hr />
    <div>
      <icon-button 
        color="green" 
        type="save" 
        @action="saveNote"
        label="Save"></icon-button>
      <icon-button 
        color="orange" 
        type="cancel" 
        @action="handleCancelEdit"
        label="Cancel"></icon-button>
      <icon-button 
        color="red" 
        type="delete" 
        @action="handleDeleteNote"
        label="Delete"></icon-button>
    </div>
    <hr />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
import { NoteService } from '../services/NoteService'
import { random } from '../utils'  
import Confirm from '../components/Confirm'
import { create } from 'vue-modal-dialogs'
import NoteTitle from '../components/NoteTitle'
import IconButton from '../components/IconButton'

/**
 * @function confirm calling a modal window to accept action
 */
const confirm = create(Confirm, 'title', 'content')

/**
 * @module Note note page and create new note page
 */
export default {
  name: "Note",
  components: {
    "todo-item": TodoItem,
    "note-title": NoteTitle,
    "icon-button": IconButton
  },
  data() {
    return {
      noteHistory: [],
      histotyIndex: 0,
      watching: true,
      noteId: '',
      note: {},
    };
  },
  mounted() {
    this.noteId = this.$route.params.noteId
    if (this.noteId) {
      this.note = NoteService.getItemById(this.noteId)
    } else {
      
      this.note = {
        noteId: "",
        title: "",
        todos: [],
      }
      this.note.noteId = random()
    }
  },
  methods: {
  /**
   * addes new Todo
   */
    addTodo() {
      this.note.todos.push({
        text: "",
        completed: false,
      });
    },
    /**
   * handling removing Todo
   */
    onRemoveTodo(todo) {
      let i = this.note.todos.indexOf(todo);
      this.note.todos.splice(i, 1);
    },
    /**
     * saving Note
     */
    saveNote() {
      NoteService.updateItem(this.note.noteId, this.note)
    },
    /**
     * cancel editing Note and rerouting to the main page
     */
    cancelEdit() {
      this.clearNote()
      this.$router.push("/");
    },
    /**
     * deleting Note and rerouting to the main page
     */
    deleteNote() {
      NoteService.removeItem(this.noteId)
      this.clearNote()
      this.$router.push("/");

    },
    /**
     * clear this.note 
     */
    clearNote(){
      this.note = {
        noteId: "",
        title: "",
        todos: [],
      }
    },
    /**
     * undoing changes
     */
    undo() {
      this.watching = false;
      if (this.histotyIndex > 0) {
        this.histotyIndex -= 1;
        this.note = this.noteHistory[this.histotyIndex];
      }
    },
     /**
     * redoing changes
     */
    redo() {
      this.watching = false;
      if (this.histotyIndex < (this.noteHistory.length - 1)) {
        this.histotyIndex += 1;
        this.note = this.noteHistory[this.histotyIndex];
      }
    },
     /**
     * handle deleting Note with confirm dialog
     */
    async handleDeleteNote(noteId){
      if (await confirm('Do you realy want to delete this note?', 'This data will be lost forever')) {
        this.deleteNote(noteId)
        } 
    },
      /**
     * handle canceling edit Note with confirm dialog
     */
    async handleCancelEdit(noteId){
      if (await confirm('Do you realy want to cancel editing and exit to the main page?',
       'All unsaved changes will be lost.')) {
        this.cancelEdit(noteId)
        } 
    },
  },
  watch: {
      /**
     *  saving history of note changings besides undoing and redoing
     */
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
    /**
     *  safe rerouting from the page
     */
  async beforeRouteLeave (to, from, next) {
    if (await confirm('Do you realy want to leave this page?',
       'All unsaved changes will be lost.')) {
        this.clearNote()
        next()
      } else{
        next(from)
      }
  }
};
</script>

<style>
.new-todo{
  display: flex;
  justify-content: flex-start;
  background-color: #e2e2e2;
  height: 36px;
  margin: 5px 0px;
  padding-top: 4px;
  padding-left: 10px;
  padding-right: 15px;
  border-radius: 5px;
}
</style>
