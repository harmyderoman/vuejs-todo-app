<template>
  <div class="home">
    <h1>List Of Notes:</h1>
    <div>
      <note-card
        v-for="note in notes"
        :note="note"
        :key="note.title"
        @delete-note="onDeleteNote"
      />
    </div>
    <hr />
    <button @click="clearAll">Clear Data</button>
  </div>
</template>

<script>
import NoteCard from "../components/NoteCard";
import { NoteService } from '../services/NoteService'
import {LocalStorageService} from '../services/LocalStorageService'

export default {
  name: "Home",
  data() {
    return {
      notes: [],
    };
  },
  components: {
    "note-card": NoteCard,
  },
  mounted () {
    this.fetchNotes()
  },
  methods: {
    onDeleteNote(noteId) {
      NoteService.removeItem(noteId)
      this.fetchNotes()
    },
    fetchNotes(){
      this.notes = NoteService.fetchNotes()
    },
    clearAll(){
      LocalStorageService.clearAllItems()
    }
  },
};
</script>
