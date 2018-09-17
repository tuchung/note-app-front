<template>
<div class="top-bar" id="example-menu">
  <div class="top-bar-left">
    <ul class="dropdown menu menu-hover-lines" data-dropdown-menu>
      <li class="menu-text">NoteScape</li>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">List</a></li>
      <li><a href="#">Map</a></li>
    </ul>
  </div>
  <div class="top-bar-right">
    <ul class="menu">
      <li><input type="search" placeholder="Search"></li>
      <li><button type="button" class="button">Search</button></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
