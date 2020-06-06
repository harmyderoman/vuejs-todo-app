<template>
  <div>
    <span>Note title:</span>

    <br />
    <div class="title-block" v-if="!editable">
      <span @click="editable = !editable" class="note-title">
        {{ note.title }} 
        </span>
      <button v-if="!editable" @click="editable = !editable">
        <span class='material-icons orange'>edit</span>
      </button>
    </div>
    <input
      v-else
      type="text"
      v-model="note.title"
      v-on:keyup.enter="editable = !editable"
      placeholder="Enter title"
    />
  </div>
</template>

<script>
export default {
  name: "NoteTitle",
  props: {
    note: Object,
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
  margin: 0 auto;
}
input[type="text"]::placeholder {
  font-weight: normal;
  font-family: cursive, sans-serif;
  color: #d1d1d1;
  font-size: 1em;
}
.note-title{
  font-weight: bold;
  font-family: cursive, sans-serif;
  color: #a7a7a7;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  font-size: 1.5em;
}
.title-block{
  padding: 1px 0px;
}
button{
  border: none;
  border-radius: 100%;
  background-color: #ffffff00;
}
button:focus {
  outline: none;
  
}
button:hover{
  background-color: #ffffff7e;

}
</style>
