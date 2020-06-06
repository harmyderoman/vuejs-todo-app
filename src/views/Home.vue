<template>
  <div class="home">
    <div v-if="!notes.length">
      <h3>There is no notes available. To create new one click here</h3>
      <icon-button color="orange" type="add" @action="$router.push('/note')"></icon-button>
    </div>
    <div>
      <note-card
        v-for="note in notes"
        :note="note"
        :key="note.title"
        @delete-note="handleDeleteNote"
      />
    </div>
  </div>
</template>

<script>
import NoteCard from "../components/NoteCard";
import { NoteService } from '../services/NoteService' 
import Confirm from '../components/Confirm'
import { create } from 'vue-modal-dialogs'
import IconButton from '../components/IconButton'

const confirm = create(Confirm, 'title', 'content')

export default {
  name: "Home",
  data() {
    return {
      notes: []
    };
  },
  components: {
    "note-card": NoteCard,
    "icon-button": IconButton
    
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

<style scoped>
div{
  text-align: center;
}
</style>
