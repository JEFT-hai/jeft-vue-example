<!--
 * @Author: your name
 * @Date: 2022-02-20 15:03:49
 * @LastEditTime: 2022-02-20 15:18:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Bar.vue
-->
<template>
  <div class="bar page">
    <j-nav-bar leftArrow title="bar" @click-left="goBack"></j-nav-bar>
    <div class="main">
      <j-bar :barMaxValue="250">
        <j-bar-item
          v-for="item in barList"
          :value="item.value"
          :title="item.title"
          :footer="item.footer"
          :key="item.footer"
        ></j-bar-item>
      </j-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      barList: [
        {
          value: 100,
          title: "100",
          footer: "1",
        },
        {
          value: 200,
          title: "200",
          footer: "2",
        },
        {
          value: 150,
          title: "150",
          footer: "3",
        },
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {
    goBack() {
      history.back();
    },
  },
};
</script>

<style lang='less'>
</style>