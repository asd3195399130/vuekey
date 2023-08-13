<!--  -->
<template>
  <div class="post">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
      leave-active-class="animate__backOutUp"
    >
      <div v-if="shup" :key="1">
        <div v-if="show">
          <h2>
            <img src="https://files.codelife.cc/topsearch/KqndgxeLl9.png" alt />
            <span>微博·实时热点</span>
          </h2>
          <ul>
            <li v-for="(item,index) in meth" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.num}}</em>
            </li>
          </ul>
        </div>
        <div v-if="shou">
          <h2>
            <img src="https://files.codelife.cc/topsearch/mproPpoq6O.png" alt />
            <span>知乎·热榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in titimg" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="shot">
          <h2>
            <img src="https://files.codelife.cc/topsearch/WnBe01o371.png" alt />
            <span>微信·24h热文榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in weixin" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="out" :key="2">
        <div v-if="show">
          <h2>
            <img src="https://files.codelife.cc/topsearch/KqndgxeLl9.png" alt />
            <span>微博·实时热点</span>
          </h2>
          <ul>
            <li v-for="(item,index) in meth" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.num}}</em>
            </li>
          </ul>
        </div>
        <div v-if="shou">
          <h2>
            <img src="https://files.codelife.cc/topsearch/mproPpoq6O.png" alt />
            <span>知乎·热榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in titimg" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="shot">
          <h2>
            <img src="https://files.codelife.cc/topsearch/WnBe01o371.png" alt />
            <span>微信·24h热文榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in weixin" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="tbod">
          <h2>
            <img src="https://files.codelife.cc/topsearch/Jb0vmloB1G.png" alt />
            <span>百度·实时热点</span>
          </h2>
          <ul>
            <li v-for="(item,index) in baidu" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="shut">
          <h2>
            <img src="https://files.codelife.cc/topsearch/Q1Vd5Ko85R.png" alt />
            <span>36氪·24小时热榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in qingqi " :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <!-- <em>{{item.number}}</em> -->
            </li>
          </ul>
        </div>
        <div v-if="shat">
          <h2>
            <img src="https://files.codelife.cc/topsearch/Y2KeDGQdNP.png" alt />
            <span>少数派·热门文章</span>
          </h2>
          <ul>
            <li v-for="(item,index) in pai" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="list">
          <h2>
            <img src="https://files.codelife.cc/topsearch/5VaobgvAj1.png" alt />
            <span>虎嗅网·热文</span>
          </h2>
          <ul>
            <li v-for="(item,index) in hu" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="shst">
          <h2>
            <img src="https://files.codelife.cc/topsearch/74Kvx59dkx.png" alt />
            <span>IT之家·日榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in Itzhijia" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="bod" :key="3">
        <div v-if="show">
          <h2>
            <img src="https://files.codelife.cc/topsearch/KqndgxeLl9.png" alt />
            <span>微博·实时热点</span>
          </h2>
          <ul>
            <li v-for="(item,index) in meth" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.num}}</em>
            </li>
          </ul>
        </div>
        <div v-if="shou">
          <h2>
            <img src="https://files.codelife.cc/topsearch/mproPpoq6O.png" alt />
            <span>知乎·热榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in titimg" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="shot">
          <h2>
            <img src="https://files.codelife.cc/topsearch/WnBe01o371.png" alt />
            <span>微信·24h热文榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in weixin" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="tbod">
          <h2>
            <img src="https://files.codelife.cc/topsearch/Jb0vmloB1G.png" alt />
            <span>百度·实时热点</span>
          </h2>
          <ul>
            <li v-for="(item,index) in baidu" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
        <div v-if="yin">
          <h2>
            <img src="https://files.codelife.cc/topsearch/DpQvNABoNE.png" alt />
            <span>抖音·热门视频榜</span>
          </h2>
          <ul>
            <li v-for="(item,index) in dou" :key="index">
              <span :style="{backgroundColor:getback(index)}" id="sq">{{ item.id }}</span>
              <span>{{item.title}}</span>
              <em>{{item.number}}</em>
            </li>
          </ul>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "CounTe",
  data() {
    return {
      mth: "僵尸",
      show: true,
      shou: false,
      shot: false,
      shup: true,
      out: false,
      tbod: false,
      shut: false,
      shat: false,
      list: false,
      shst: false,
      bod: false,
      yin: false,
      data: null
    };
  },
  methods: {
    getback(index) {
      if (index < 3) {
        // 返回前三个数字对应的背景色
        if (index === 0) {
          return "red";
        } else if (index === 1) {
          return "orange";
        } else {
          return "yellow";
        }
      } else {
        // 返回其他数字的背景色
        return "";
      }
    },
    inlin(data) {
      if (data == 0) {
        this.show = true;
        this.shou = false;
        this.shot == false;
        this.tbod = false;
        this.shut = false;
        this.shat = false;
        this.list = false;
        this.shst = false;
        this.yin = false;
      } else if (data == 1) {
        this.show = false;
        this.shou = true;
        this.shot = false;
        this.tbod = false;
        this.shut = false;
        this.shat = false;
        this.list = false;
        this.shst = false;
        this.yin = false;
      } else if (data == 2) {
        this.show = false;
        this.shou = false;
        this.shot = true;
        this.tbod = false;
        this.shut = false;
        this.shat = false;
        this.list = false;
        this.shst = false;
        this.yin = false;
      } else if (data == 3) {
        this.show = false;
        this.shou = false;
        this.shot = false;
        this.tbod = true;
        this.shut = false;
        this.shat = false;
        this.list = false;
        this.shst = false;
        this.yin = false;
      } else if (data == 4) {
        this.show = false;
        this.shou = false;
        this.shot = false;
        this.tbod = false;
        this.shut = true;
        this.shat = false;
        this.huxiu = false;
        this.shst = false;
        this.yin = true;
      } else if (data == 5) {
        this.show = false;
        this.shou = false;
        this.shot = false;
        this.tbod = false;
        this.shut = false;
        this.shat = true;
        this.list = false;
        this.shst = false;
      } else if (data == 6) {
        this.show = false;
        this.shou = false;
        this.shot = false;
        this.tbod = false;
        this.shut = false;
        this.shat = false;
        this.list = true;
        this.shst = false;
      } else if (data == 7) {
        this.show = false;
        this.shou = false;
        this.shot = false;
        this.tbod = false;
        this.shut = false;
        this.shat = false;
        this.list = false;
        this.shst = true;
      }
      console.log(this.show);
    },
    back(msg) {
      if (msg == 0) {
        this.shup = true;
        this.out = false;
        this.bod = false;
      }
      if (msg == 1) {
        this.shup = false;
        this.out = true;
        this.bod = false;
      }
      if (msg == 2) {
        this.shup = false;
        this.out = false;
        this.bod = true;
      }
    }
  },

  created() {
    this.$bus.$on("hear", this.back);
  },
  mounted() {
    this.meth;
    this.weixin;
    this.titimg;
    this.baidu;
    this.qingqi;
    this.pai;
    console.log(this.hu);
    this.baidu;
    this.dou;
    this.Itzhijia;
    this.$bus.$on("table", this.inlin);
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
.post {
  width: 770px;
  height: 503px;
  color: red;
  border: 1px solid #fff;
  margin-top: 10px;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
span {
  margin-left: 5px;
}
li span:nth-child(1) {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
ul {
  list-style: none;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #fff;
  color: #fff;
  line-height: 30px;
}
li:hover {
  background-color: #fff;
  color: #000;
}
h2 {
  color: #fff;
  font-size: 18px;
  padding-bottom: 6px;
  line-height: 30px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #fff;
}
em {
  max-width: 100px;
  height: 22px;
  line-height: 22px;
  overflow: hidden;
  display: inline-block;
  margin-right: 20px;
}
</style>