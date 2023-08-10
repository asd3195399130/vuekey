<template>
  <div id="app">
    <img src="./assets/logo.png" alt />
    <!-- <Code></Code> -->
    <son name="马户" sex="女" age="19"></son>
  </div>
</template>

<script>
import son from "./components/son";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    son
  },
  props: {},
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
