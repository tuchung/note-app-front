<template>
  <div id="app">
    <img class="logo" src="./assets/images/logo.png">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style scoped>
@import './style/app.css';
@import 'semantic-ui-css/semantic.min.css';

</style>
