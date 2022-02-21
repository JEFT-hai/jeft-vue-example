<!--
 * @Author: your name
 * @Date: 2022-02-20 17:28:05
 * @LastEditTime: 2022-02-21 11:36:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Notice.vue
-->
<template>
  <div class="noticeToast page">
    <j-nav-bar leftArrow title="notice-toast" @click-left="goBack"></j-nav-bar>
    <div class="main">
      <j-notice-toast :show="show" :items="items"></j-notice-toast>
      <j-notice-toast
        :show="show"
        type="half"
        top="200"
        :items="items"
      ></j-notice-toast>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show: true,
      items: [
        {
          message: "1发布了...",
        },
        {
          message: "2发布了",
        },
        {
          message: "3获得了...",
        },
      ],
    };
  },
  components: {},
  mounted() {
    this.$noticeToast({
      show: true,
      items: this.items,
      basePosition: "right",
      top: 60,
    });
  },
  beforeDestroy() {
    this.$noticeToast({
      show: false,
    });
    this.show = false;
  },
  methods: {
    goBack() {
      history.back();
    },
  },
};
</script>

<style lang='less'>
</style>