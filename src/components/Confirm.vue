<template>
  <div class="modal-backdrop" @click="$close(false)">
    <div class="modal-dialog">
      <header class="modal-title">{{ title }}</header>
      <div class="modal-body">
        <p>{{ content }}</p>
      </div>
      <footer class="modal-actions">
        <button type="text" @click="$close(true)">Yes</button>
        <button type="text" @click="$close(false)">No</button>
      </footer>
    </div>
  </div>
</template>

<style>
.modal-backdrop {
  background: rgba(78, 78, 78, 0.658);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
}
.modal-dialog {
  width: 30rem;
  background: rgb(255, 255, 255);
  padding: 1.5rem 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.3rem;
  transition: 0.5s;
}
.modal-title {
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  /* color: rgb(100, 100, 100); */
  color: red;
}
.modal-body {
    color: red;
  /* color: rgb(180, 180, 180); */
}
.modal-actions{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 10px;
}
</style>