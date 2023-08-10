<!--  -->
<template>
  <div class ref="refdiv">
    <h1>{{msg}}</h1>
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "个人基本信息"
    };
  },
  //   props: ["name", "sex", "age"],
  props: {
    age: Number,
    name: String,
    sex: String
  },
  created() {},
  mounted() {
    this.$refs.refdiv.style.color = "red";
    console.log(this.$refs.refdiv);
  }
};
</script>
<style lang="sess" scoped>
/* @import url(); 引入css类 */
</style>