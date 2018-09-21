<template>
<div></div>  
</template>

<script>
// import Note from './Note'
export default {
  name: 'List',
  // components: {
  //   Note
  // },
  "user" : getUser()
   
}

function getUser(){
   // GET /someUrl
 this.$http.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(response => {

    // get body data
    console.log(response.body);
  return this.someData = response.body;

  }, response => {
    // error callback
  });
}
</script>
