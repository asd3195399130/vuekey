<!--  -->
<template>
  <div class>
    <button @click="send">今晚</button>
  </div>
</template>

<script>
export default {
  name: "HelLo",
  data() {
    return {
      meg: "今天有鱼吃"
    };
  },
  methods: {
    send() {
      this.$bus.$emit("xxx", this.meg);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>