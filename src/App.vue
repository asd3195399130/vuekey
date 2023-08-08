<template>
  <div id="app">
    <!-- <Code></Code> -->
    <KunLe />
    <Hello />
  </div>
</template>

<script>
// import Code from "./components/xiaochengxu.vue";
import KunLe from "./components/KunLe";
import Hello from "./components/Hello";
export default {
  name: "App",
  components: {
    // Code
    Hello,
    KunLe
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
