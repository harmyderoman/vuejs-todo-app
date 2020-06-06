<template>
  <div id="app">
    <nav>
      <router-link class="router-link" to="/" exact>List Of Notes</router-link>
      <router-link class="router-link" to="/note" exact>Create Note</router-link>
    </nav>
    <hr/>
    <router-view/>
    <dialogs-wrapper transition-name="fade"></dialogs-wrapper>
    <p>Made by Roman Harmyder. Link to the <a href="https://github.com/harmyderoman/vuejs-todo-app">source</a>. </p>
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
  color: #8a8a8a;
}
*{
  box-sizing: border-box;
}
ul{
  padding-inline-start: 0px;
  list-style-type: none;
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

.green{
  color: green
}
.red{
  color: red;
}
.orange{
  color: orange;
}
.grey{
  color: grey;
}
.black{
  color: black;
}
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
@media screen and (max-width: 375px) {
  #app{
    padding: 15px 15px;
  }
}
</style>
