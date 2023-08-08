<!--  -->
<template>
  <div class>
    <button @clcik="bun">点击我</button>
    <p>{{xin}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "大吉大利，今晚吃鸡",
      xin: "?"
    };
  },
  methods: {
    bun(msg) {
      console.log(msg);
      this.xin = msg;
    }
  },
  created() {},
  mounted() {
    this.$bus.$on("xxx", this.bun);
    console.log(this);
  }
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>