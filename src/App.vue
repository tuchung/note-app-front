<template>
  <div id="app">
    <img class="logo" src="./assets/images/logo.png">
    <img class="title" src="./assets/images/title.png">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 8%;
  height: 8%;
}
.title{
  width: 30%;
  height: 30%;
}

</style>
