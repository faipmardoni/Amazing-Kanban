<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
  body {
    background-color: limegreen;
  }
  
  .card-header {
    color: white;
  }
  
  #top-nav {
    margin-bottom: 15px;
  }
</style>
