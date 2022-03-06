<!--
 * @Author: your name
 * @Date: 2022-02-19 21:10:49
 * @LastEditTime: 2022-03-06 23:47:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\LocationMap.vue
-->
<!--
 * @Author: your name
 * @Date: 2022-02-18 19:52:32
 * @LastEditTime: 2022-02-19 20:53:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\Home.vue
-->
<template>
  <div class="location page">
    <j-nav-bar leftArrow title="location-map" @click-left="goBack"></j-nav-bar>
    <j-location-map
      v-model="show"
      addressType="list"
      mapKey="Gq7gTjpOaZIhkGs0l4MEOA1BkFsoATaP"
      mapId="listMap"
      :initCenter.sync="initCenter"
      @address="address = $event"
    ></j-location-map>
    <j-location-map
      v-model="show1"
      :bMap="false"
      addressType="list"
      :initCenter.sync="initCenter1"
      @address="address1 = $event"
      mapKey="Gq7gTjpOaZIhkGs0l4MEOA1BkFsoATaP"
      mapId="listMap1"
    ></j-location-map>
    <j-location-map
      v-model="show2"
      addressType="only"
      mapKey="Gq7gTjpOaZIhkGs0l4MEOA1BkFsoATaP"
      mapId="listMap"
      @address="address2 = $event"
      :initCenter.sync="initCenter"
      :userDetail.sync="userInfo"
    ></j-location-map>
    <div class="main content">
      <div>address:{{ address }}</div>
      <j-button :style="{ marginBottom: '15px' }" @click="show = true" round
        >百度地图数据</j-button
      >
      <div>address1:{{ address1 }}</div>
      <j-button :style="{ marginBottom: '15px' }" @click="show1 = true" round
        >腾讯/高德地图数据</j-button
      >
      <div>address2:{{ address2 }}</div>
      <div>userInfo:{{ userInfo }}</div>
      <j-button :style="{ marginBottom: '15px' }" @click="show2 = true" round
        >百度地图数据-选点+客户信息</j-button
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
      show: false,
      show1: false,
      show2: false,
      address: {},
      address1: {},
      address2: {},
      initCenter: {},
      initCenter1: {},
      userInfo: {},
      city: "深圳市",
    };
  },
  methods: {
    goBack() {
      history.back();
    },
    async location() {
      return "深圳市";
    },
  },
};
</script>
<style scoped>
  .content {
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
