(function(){"use strict";var n={1386:function(n,t,e){var r=e(7195),o=function(){var n=this,t=n._self._c;return t("div",{attrs:{id:"app"}},[t("KunLe"),t("Hello")],1)},u=[],i=function(){var n=this,t=n._self._c;return t("div",{},[t("button",{on:{clcik:n.bun}},[n._v("点击我")]),t("p",[n._v(n._s(n.xin))])])},c=[],f={data(){return{msg:"大吉大利，今晚吃鸡",xin:"?"}},methods:{bun(n){console.log(n),this.xin=n}},created(){},mounted(){this.$bus.$on("xxx",this.bun),console.log(this)}},l=f,s=e(1001),a=(0,s.Z)(l,i,c,!1,null,"7ece97f6",null),p=a.exports,v=function(){var n=this,t=n._self._c;return t("div",{},[t("button",{on:{click:n.send}},[n._v("今晚")])])},d=[],h={name:"HelLo",data(){return{meg:"今天有鱼吃"}},methods:{send(){this.$bus.$emit("xxx",this.meg)}},created(){},mounted(){}},b=h,m=(0,s.Z)(b,v,d,!1,null,"0c0f37a9",null),x=m.exports,g={name:"App",components:{Hello:x,KunLe:p},methods:{}},_=g,O=(0,s.Z)(_,o,u,!1,null,null,null),w=O.exports;r.ZP.config.productionTip=!1,new r.ZP({render:n=>n(w),beforeCreate(){r.ZP.prototype.$bus=this}}).$mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return n[r].call(u.exports,u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,u){if(!r){var i=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],u=n[s][2];for(var c=!0,f=0;f<r.length;f++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](r[f])}))?r.splice(f--,1):(c=!1,u<i&&(i=u));if(c){n.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,o,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,u,i=r[0],c=r[1],f=r[2],l=0;if(i.some((function(t){return 0!==n[t]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(f)var s=f(e)}for(t&&t(r);l<i.length;l++)u=i[l],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(s)},r=self["webpackChunkvue"]=self["webpackChunkvue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(1386)}));r=e.O(r)})();
//# sourceMappingURL=app.cd8cac98.js.map