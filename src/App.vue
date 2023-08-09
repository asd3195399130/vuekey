<template>
  <div id="app">
    <img src="./assets/logo.png" alt />
    <!-- <Code></Code> -->
    <son></son>
  </div>
</template>

<script>
import son from "./components/son";
export default {
  name: "App",
  components: {
    son
  },
  methods: {}
};
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
