<template>
  <div class="note-page">
    <h1>Note Page {{ $route.params.noteId }}</h1>
    <h2>Title</h2>
    <hr />
    <div>
      <button>Undo</button>
      <button>Redo</button>
    </div>
    <ul>
      <li>
        <input type="checkbox" />
        <span>todo</span>
        <button>Delete Todo</button>
      </li>
    </ul>
    <button>Add Todo</button>
    <hr />
    <div>
      <button>Save</button>
      <button>Cansel</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  data() {
    return {
      noteId: this.$route.params.noteId,
    };
  },
};
</script>

<style></style>
