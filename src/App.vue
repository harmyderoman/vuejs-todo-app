<template>
  <div id="app">
    <nav>
      <router-link class="router-link" to="/" exact>List Of Notes</router-link>
      <router-link class="router-link" to="/note" exact>Create Note</router-link>
    </nav>
    <hr/>
    <router-view/>
    <dialogs-wrapper transition-name="fade"></dialogs-wrapper>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
body {
  background-color: rgb(192, 192, 192);
  font-family: cursive, sans-serif;
  color: #a7a7a7;
}
*{
  box-sizing: border-box;
}
ul{
  padding-inline-start: 0px;
}
#app{
  box-shadow: 0px 0px 5px 5px rgba(117,117,117,0.75);
  background-color: rgb(247, 247, 247);
  border-radius: 20px;
  padding: 20px 30px;
  width: 100%;
  max-width: 700px;
  margin: 10vh auto;
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.router-link{
  text-decoration: none;
  color: rgb(80, 80, 80);
  font-size: 22px;
}
.router-link-active{
  color: green;
  text-shadow: 0 0 7px rgba(0, 143, 36, 0.5);
}
hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
</style>
