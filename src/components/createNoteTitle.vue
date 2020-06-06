<template>
  <div>
    <span>Note title:</span>

    <br />
    <div v-if="!editable">
      <span @click="editable = !editable" class="note-title">
        {{ title }} 
        </span>
      <button v-if="!editable" @click="editable = !editable">
         Edit Title
      </button>
    </div>
    <input
      v-else
      type="text"
      v-model="title"
      v-on:keyup.enter="editable = !editable"
      placeholder="Enter title"
    />
  </div>
</template>

<script>
export default {
  name: "NoteTitle",
  props: {
    title: String,
  },
  data() {
    return {
      editable: true,
    };
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
h2 {
  display: block;
  margin: 0 auto;
}
input[type="text"] {
  width: 180px;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-family: cursive, sans-serif;
  color: #a7a7a7;
  border: none;
  border-radius: 5px;
  /* padding-left: 10px; */
  margin: 0 auto;
}
input[type="text"]::placeholder {
  font-weight: normal;
  font-family: cursive, sans-serif;
  color: #d1d1d1;
  font-size: 1em;
  /* padding-left: 10px; */
}
.note-title{
    font-weight: bold;
  font-family: cursive, sans-serif;
  color: #a7a7a7;
  border: none;
  border-radius: 5px;
  /* padding-left: 10px; */
  margin: 0 auto;
  font-size: 1.5em;
}
</style>
