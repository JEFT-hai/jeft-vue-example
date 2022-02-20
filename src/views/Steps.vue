<!--
 * @Author: your name
 * @Date: 2022-02-20 20:41:07
 * @LastEditTime: 2022-02-20 20:56:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Steps.vue
-->
<!--
 * @Author: your name
 * @Date: 2022-02-20 17:28:05
 * @LastEditTime: 2022-02-20 19:45:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Notice.vue
-->
<template>
  <div class="steps page">
    <j-nav-bar leftArrow title="steps" @click-left="goBack"></j-nav-bar>
    <div class="main">
      <j-steps :active="1">
        <j-step>买家下单</j-step>
        <j-step>商家接单</j-step>
        <j-step>提货</j-step>
        <j-step>交易完成</j-step>
      </j-steps>

      <j-steps class="center-steps" :active="3" allTextCenter reverse>
        <j-step>买家下单</j-step>
        <j-step>商家接单</j-step>
        <j-step>提货</j-step>
        <j-step>交易完成</j-step>
      </j-steps>

      <j-steps direction="vertical" :active="0">
        <j-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </j-step>
        <j-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </j-step>
        <j-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </j-step>
      </j-steps>
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
  .steps .main {
    padding: 30px;
  }
  //   .center-steps {
  //     padding: 0 30px;
  //   }
</style>