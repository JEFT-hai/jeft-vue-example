<!--
 * @Author: your name
 * @Date: 2022-02-20 21:11:21
 * @LastEditTime: 2022-02-20 21:29:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\RequestState.vue
-->

<template>
  <div class="request-state page">
    <j-nav-bar leftArrow title="request-state" @click-left="goBack"></j-nav-bar>
    <div class="main">
      <j-request-state :image="state">
        <template v-slot:image v-if="state == 'loading'">
          <j-loading size="100%"></j-loading>
        </template>
        <template v-slot:text v-if="state == 'loading'">
          <span></span>
        </template>
      </j-request-state>
      <j-request-state image="loading"></j-request-state>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      state: "loading",
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.state = "";
    }, 1800);
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