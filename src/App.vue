<template>
  <div id="app">
    <flowers/>
    <img alt="Vue logo" src="./assets/logo.png" class='fanfanhover'>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <fan/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import flowers from './components/flowers.vue'
import fan from './components/fan.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    flowers,
    fan
  }
}
</script>

<style>
@import "./styles/fan.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
