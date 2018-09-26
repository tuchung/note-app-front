<template>
  <div>
    <sui-menu pointing secondary>
      <a
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />
      <sui-menu-menu position="right">
        <a
          is="sui-menu-item"
          :active="isActive('Login')"
          content="Login"
          @click="select('Login')"
        />
        <a
          is="sui-menu-item"
          :active="isActive('Logout')"
          content="Logout"
          @click="select('Logout')"
        />
      </sui-menu-menu>
    </sui-menu>
    <LoginModal />
  </div>
</template>

<script>
import LoginModal from './login/LoginModal'
export default {
  name: 'Navigation',
  data () {
    return {
      active: 'DashBoard',
      items: ['Dashboard', 'Map', 'Calendar']
    }
  },
  methods: {
    isActive (name) {
      return this.active === name
    },
    select (name) {
      this.active = name
    }
  },
  components: {
    LoginModal
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
