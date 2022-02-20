<!--
 * @Author: your name
 * @Date: 2022-02-20 17:28:05
 * @LastEditTime: 2022-02-20 22:20:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Notice.vue
-->
<template>
  <div class="rule page">
    <j-nav-bar leftArrow title="rule" @click-left="goBack"></j-nav-bar>
    <j-rule v-model="show" name="说明" height="75vh"> 这是详细内容... </j-rule>
    <div class="main content">
      <j-button :style="{ marginBottom: '15px' }" @click="showRule" round
        >显示说明</j-button
      >
      <j-button :style="{ marginBottom: '15px' }" @click="show = true" round
        >显示说明-组件方式调用2</j-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show: false,
    };
  },
  components: {},
  mounted() {},
  methods: {
    goBack() {
      history.back();
    },
    showRule() {
      this.$rule({
        name: "说明",
        content: "1...,<br />2...",
        // popup参数
        round: true,
      });
    },
  },
};
</script>

<style lang='less'>
  .content {
    padding: 20px;
  }
</style>