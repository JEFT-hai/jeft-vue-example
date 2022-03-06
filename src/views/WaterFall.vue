<!--
 * @Author: your name
 * @Date: 2022-02-20 17:28:05
 * @LastEditTime: 2022-03-06 23:57:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Notice.vue
-->
<template>
  <div class="waterFall page">
    <j-nav-bar leftArrow title="water-fall" @click-left="goBack"></j-nav-bar>
    <!-- <div class="main"> -->
    <j-pull-refresh
      v-model="isJWLoading"
      @refresh="onJWRefresh"
      class="list-wrapper main"
      loading-text="loading..."
      success-text="刷新成功了"
    >
      <j-list v-model="jWLoading" :finished="jWFinished" @load="onJWLoad">
        <j-water-fall :addItems="addItems" v-model="refreshed"></j-water-fall>
      </j-list>
    </j-pull-refresh>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isJWLoading: false,
      jWLoading: false,
      jWFinished: false,
      refreshed: false,
      addItems: [
        {
          cover:
            "https://jeft-media.oss-cn-shenzhen.aliyuncs.com/jeft-vue-example/d48acef1-70e9-4fb6-ab34-a3ad09ea7af3%20%281%29.jpg",
          title: "赣州阳光城·翡丽湾样板间",
          width: 511,
          height: 682,
          id: 1,
        },
        {
          cover:
            "https://jeft-media.oss-cn-shenzhen.aliyuncs.com/jeft-vue-example/d48acef1-70e9-4fb6-ab34-a3ad09ea7af3%20%281%29.jpg",
          title: "赣州阳光城·翡丽湾样板间",
          width: 511,
          height: 782,
          id: 2,
        },
      ],
      addTItems: [
        {
          cover:
            "https://jeft-media.oss-cn-shenzhen.aliyuncs.com/jeft-vue-example/d48acef1-70e9-4fb6-ab34-a3ad09ea7af3%20%281%29.jpg",
          title: "赣州阳光城·翡丽湾样板间",
          width: 511,
          height: 682,
          id: 11,
        },
        {
          cover:
            "https://jeft-media.oss-cn-shenzhen.aliyuncs.com/jeft-vue-example/d48acef1-70e9-4fb6-ab34-a3ad09ea7af3%20%281%29.jpg",
          title: "赣州阳光城·翡丽湾样板间",
          width: 511,
          height: 782,
          id: 12,
        },
      ],
    };
  },
  components: {},
  methods: {
    goBack() {
      if (window != top) {
        top.history.back();
      } else {
        history.back();
      }
    },
    onJWLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.isJWLoading = false;

        // this.addItems = this.addTItems

        // 加载状态结束
        this.jWLoading = false;

        // 数据全部加载完成
        this.jWFinished = true;
      }, 1000);
    },
    onJWRefresh() {
      setTimeout(() => {
        this.refreshed = true;
        this.addItems = JSON.parse(JSON.stringify(this.addTItems));
        this.isJWLoading = false;
      }, 1000);
    },
  },
};
</script>

<style lang='less'>
</style>