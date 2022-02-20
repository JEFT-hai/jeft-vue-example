<!--
 * @Author: your name
 * @Date: 2022-02-20 15:19:19
 * @LastEditTime: 2022-02-20 15:28:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Circle.vue
-->
<!--
 * @Author: your name
 * @Date: 2022-02-20 15:03:49
 * @LastEditTime: 2022-02-20 15:18:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Bar.vue
-->
<template>
  <div class="circle page">
    <j-nav-bar leftArrow title="circle" @click-left="goBack"></j-nav-bar>
    <div class="main">
      <circle-canvas
        :width="200"
        :height="200"
        :config="{
          data: [100, 150, 200],
          lineWidth: 36,
          colorList: ['#406bff', '#0cc', '#9a90ff'],
          name: [1, 2, 3],
        }"
      ></circle-canvas>
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