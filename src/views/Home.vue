<template>
  <div class="home">
    <h1>List Of Notes:</h1>
    <div>
      <note-card
        v-for="note in notes"
        :note="note"
        :key="note.title"
        @delete-note="handleDeleteNote"
      />
    </div>
    <hr />
  </div>
</template>

<script>
import NoteCard from "../components/NoteCard";
import { NoteService } from '../services/NoteService' 
import Confirm from '../components/Confirm'
import { create } from 'vue-modal-dialogs'

const confirm = create(Confirm, 'title', 'content')

export default {
  name: "Home",
  data() {
    return {
      notes: [],
      content: "Hello!!!"
    };
  },
  components: {
    "note-card": NoteCard,
    
  },
  mounted () {
    this.fetchNotes()
  },
  methods: {
    deleteNote(noteId) {
      NoteService.removeItem(noteId)
      this.fetchNotes()
    },
    fetchNotes(){
      this.notes = NoteService.fetchNotes()
    },
    async handleDeleteNote(noteId){
      if (await confirm('Do you realy want to delete this note?', 'This data will be lost forever')) {
        this.deleteNote(noteId)
        } 
    }
  },
};
</script>
