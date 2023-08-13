<!--  -->
<template>
  <div class="refdiv">
    <input type="text" placeholder="搜索" />
    <div v-if="shou">
      <ul>
        <li
          v-for="(item,index) in math"
          :key="index"
          :class="ip == index ? 'avtived' : ''"
          @click="inl(index)"
        >
          <span>
            <img :src="item.url" alt />
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div v-if="show">
      <ul>
        <li
          v-for="(item,index) in comp"
          :key="index"
          :class="ip == index ? 'avtived' : ''"
          @click="inl(index)"
        >
          <span>
            <img :src="item.url" alt />
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div v-if="shut">
      <ul>
        <li
          v-for="(item,index) in mathc"
          :key="index"
          :class="ip == index ? 'avtived' : ''"
          @click="inl(index)"
        >
          <span>
            <img :src="item.url" alt />
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "",
  data() {
    return {
      ip: 0,
      shou: true,
      show: false,
      shut: false
    };
  },
  methods: {
    inl(index) {
      this.$bus.$emit("table", (this.ip = index));
    },
    get(data) {
      console.log(data);
      if (data == 0) {
        this.shou = true;
        this.show = false;
        this.shut = false;
      }
      if (data == 1) {
        this.shou = false;
        this.show = true;
        this.shut = false;
      }
      if (data == 2) {
        this.shou = false;
        this.show = false;
        this.shut = true;
      }
    }
  },
  created() {},
  mounted() {
    console.log(this.math);
    this.comp;
    this.mathc;
    this.$bus.$on("hear", this.get);
  }
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
.refdiv {
  width: 210px;
  height: 513px;
  color: #f71010;
  margin-top: 10px;
  border: 1px solid #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
input {
  width: 90%;
  height: 30px;
  margin-top: 10px;
  border: 1px solid #fff;
  border-radius: 15px;
  background: #ccc;
}
span img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
ul {
  list-style: none;
}
li {
  cursor: pointer;
  margin-top: 10px;
  font-size: 13px;
  height: 50px;
  text-align: left;
  line-height: 30px;

  color: #fff;
}
.avtived {
  background: rgb(17, 0, 255);
}
span {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
}
</style>