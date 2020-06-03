<template>
  <div id="app">
    <nav>
      <router-link to="/">List Of Notes</router-link>
      <router-link to="/note">New Note</router-link>
    </nav>
    <hr/>
    <router-view/>
  </div>
</template>

<style scoped>
nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
a{
  text-decoration: none;
  color: black;
  font-size: 26px;
}
</style>
