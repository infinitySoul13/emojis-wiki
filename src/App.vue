<template>
  <div id="app">

<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container">
      <EmojisWikiPicker :local="local"></EmojisWikiPicker>
    </div>
  </div>

</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import EmojisWikiPicker from './components/EmojisWikiPicker.vue'

  export default {
    name: 'App',
    components: {
      // HelloWorld,
      EmojisWikiPicker
    },
    data () {
      return {
          local: 'en'
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
