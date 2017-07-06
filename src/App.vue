<style src="./assets/bootstrap.min.css"></style>

<template>
  <div id="app">
		<header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/Header/Header.vue'

export default {
  name: 'app',
  components: {
    HeaderBar
  }
}
</script>
<style>
body {
	margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
