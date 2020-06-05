<template>
  <div class="message-box dialog-mask" @click="$close(false)">
    <div class="dialog-content">
      <header>{{ title }}</header>
      <div class="dialog-body">
        <p>{{ content }}</p>
      </div>
      <footer>
        <button type="text" size="mini" @click="$close(true)">Yes</button>
        <button type="text" size="mini" @click="$close(false)">No</button>
      </footer>
    </div>
  </div>
</template>