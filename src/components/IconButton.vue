<template>
  <button
    :style="{ color: color }"
   @click="$emit('action')"
   :aria-label="label">
    <span class="material-icons md-36" aria-hidden="true">
      {{ type }}
    </span>
    <slot></slot>
  </button>
</template>

<script>
/**
 * @module IconButton icon button 
 */
export default {
  name: "IconButton",
  props: {
    type: String,
    color: String,
    label: String
  }
}
</script>

<style scoped>
button{
  border: none;
  border-radius: 100%;
  background-color: #ffffff00;
  opacity: 0.7;
}
button:focus {
  outline: none;
  
}
button:hover{
  cursor: pointer;
  opacity: 1;
  text-shadow: 0 0 7px rgba(102, 102, 102, 0.5);
}
span{
  line-height: 0.75;
}
</style>
