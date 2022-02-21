<!--
 * @Author: your name
 * @Date: 2022-02-18 19:52:32
 * @LastEditTime: 2022-02-21 11:39:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Home.vue
-->
<template>
  <div class="home page">
    <j-nav-bar title="jeft-vue"></j-nav-bar>
    <div class="demo-home-nav__group main">
      <!-- :href="'http://localhost:8080/guide/' + item.link + '.html'"
        target="_parent" -->
      <a
        v-for="item in list"
        :key="item.link"
        @click="goLink(item.link)"
        class="demo-home-nav__block"
        >{{ item.text }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      list: [
        {
          link: "LocationCity",
          text: "LocationCity 城市定位",
        },
        {
          link: "LocationMap",
          text: "LocationMap 地图选点",
        },
        {
          link: "Bar",
          text: "Bar 柱状图",
        },
        {
          link: "Circle",
          text: "Circle 环形图",
        },
        {
          link: "NoticeToast",
          text: "NoticeToast 消息提示",
        },
        {
          link: "WaterFall",
          text: "WaterFall 不规则瀑布流",
        },
        {
          link: "Steps",
          text: "Steps 步骤条",
        },
        {
          link: "Loading",
          text: "Loading 加载loading",
        },
        {
          link: "RequestState",
          text: "RequestState 空状态/loading-占位符",
        },
        {
          link: "Rule",
          text: "Rule 富文本规则弹窗",
        },
        {
          link: "UploadProgress",
          text: "UploadProgress 上传进度",
        },
      ],
    };
  },
  methods: {
    goLink(link) {
      if (window != top) {
        console.log("iiii", top.location);
        console.log("ppp", parent.location, document.referrer);
        top.location.href = `${document.referrer}guide/${link}.html`;
      } else {
        this.$router.push({ path: link });
      }
    },
  },
};
</script>
<style scoped>
  .main {
    padding: 20px;
  }
  .demo-home-nav__block {
    position: relative;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;
  }
  .demo-home-nav__block:hover {
    background: #eef0f4;
  }
</style>
