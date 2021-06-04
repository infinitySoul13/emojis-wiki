<template>
  <div id="app">
<!--    <div class="container">-->
<!--        <div class="row">-->
<!--            <button class="btn btn-primary" @click="local='en'">-->
<!--                en-->
<!--            </button>-->
<!--            <button class="btn btn-primary" @click="local='de'">-->
<!--                de-->
<!--            </button>-->
<!--            <button class="btn btn-primary" @click="local='es'">-->
<!--                es-->
<!--            </button>-->
<!--            <button class="btn btn-primary" @click="local='fr'">-->
<!--                fr-->
<!--            </button>-->
<!--            <button class="btn btn-primary" @click="local='it'">-->
<!--                it-->
<!--            </button>-->
<!--            <button class="btn btn-primary" @click="local='pt'">-->
<!--                pt-->
<!--            </button>-->
<!--            <button class="btn btn-primary" @click="local='ru'">-->
<!--                ru-->
<!--            </button>-->
<!--        </div>-->
      <EmojisWikiPicker :local="local"></EmojisWikiPicker>
    </div>
<!--  </div>-->

</template>

<script>
  import EmojisWikiPicker from './components/EmojisWikiPicker.vue'

  export default {
    name: 'App',
    components: {
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
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
