<template>
  <div>
    <Navigation />
    <List />
  </div>

</template>
<script>
import Navigation from './Navigation'
// import List from './dash_board/List'
export default {
  name: 'DashBoard',
  components: {
    Navigation
    // List
  },
  data: function () { 
   // GET /someUrl
      this.$http.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(response => {

          // get body data
          console.log(response.body);
        return this.someData = response.body;

        }, response => {
          // error callback
        });
  }
  
}
</script>
