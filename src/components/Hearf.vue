<!--  -->
<template>
  <div class="head">
    <div>
      <ul>
        <li
          v-for="(item,index) in match"
          :key="index"
          :class="id==index?'active':''"
          @click="tabl(index)"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      id: 0
    };
  },
  methods: {
    tabl(index) {
      this.id = index;
      this.$bus.$emit("hear", index);
    }
  },
  created() {},
  mounted() {
    this.match;
  }
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.head {
  width: 100%;
  background: rgb(10, 10, 10);
}

.active {
  color: blue;
  border-bottom: 1px solid blue;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}
li {
  cursor: pointer;
  color: #fff;
}
</style>