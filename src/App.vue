<template>
  <div id="app" :class="falg ? 'da' :'xiao'">
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__backOutUp"
    >
      <h2 class="hh">热搜榜</h2>
    </transition>
    <button @click="falg = !falg">
      <svg
        t="1691756254276"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3963"
        width="16"
        height="16"
      >
        <path
          d="M109.44 960H416a32 32 0 1 1 0 64h-384a32 32 0 0 1-32-32v-384a32 32 0 1 1 64 0v306.88l329.6-328.576a32 32 0 0 1 45.184 45.312L109.44 960zM914.752 64h-306.56a32 32 0 1 1 0-64h384a32 32 0 0 1 32 32v384a32 32 0 1 1-64 0V109.12l-329.6 328.576a32 32 0 0 1-45.184-45.312L914.752 64z"
          fill="#606266"
          p-id="3964"
        />
      </svg>
    </button>
    <Hearf />
    <son />
    <Counte />
  </div>
</template>

<script>
import Hearf from "./components/Hearf";
import son from "./components/son";
import Counte from "./components/Counte";
import "animate.css";
export default {
  name: "App",
  data() {
    return {
      mt: "333",
      falg: false
    };
  },
  components: {
    Hearf,
    son,
    Counte
  },
  props: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
template {
  position: relative;
}
#app {
  width: 1000px;
  height: 600px;
  background: rgb(2, 2, 2);
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.xiao {
  width: 1200px;
  height: 800px;
}
.da {
  width: 100vw !important;
  height: 100vh !important;
}
.hh {
  display: inline-block;
  font-size: 50px;
  font-family: "楷体";
  -webkit-text-stroke: 1px rgb(238, 12, 12);
  margin: auto;
}
</style>
