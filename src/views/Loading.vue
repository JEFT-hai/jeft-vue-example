<!--
 * @Author: your name
 * @Date: 2022-02-20 21:05:32
 * @LastEditTime: 2022-02-20 21:09:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Loading.vue
-->
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
  <div class="loading page">
    <j-nav-bar leftArrow title="loading" @click-left="goBack"></j-nav-bar>
    <div class="main">
      <j-loading :showBgLoading="false" size="100%"></j-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
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