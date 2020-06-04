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
  </div>
</template>

<script>
import notes from "../data";
import NoteCard from "../components/NoteCard";

export default {
  name: "Home",
  data() {
    return {
      notes: notes,
    };
  },
  components: {
    "note-card": NoteCard,
  },
  methods: {
    onDeleteNote(noteId) {
      let index = notes.findIndex((note) => note.noteId == noteId);

      notes.splice(index, 1);
      // this.$router.push("/");
    },
  },
};
</script>
