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
    <j-nav-bar leftArrow title="location-city" @click-left="goBack"></j-nav-bar>
    <j-location-city
      v-model="show"
      :locationCity.sync="locationCity"
      :city.sync="city"
    ></j-location-city>
    <j-location-city
      v-model="show1"
      :hotCityList="[]"
      :cityList="cityList"
      :locationCity.sync="locationCity"
      :location="location"
      :city.sync="city1"
    ></j-location-city>
    <j-location-city
      v-model="show2"
      :hotCityList="[]"
      :cityList="cityList2"
      :locationCity.sync="locationCity"
      :location="location"
      :city.sync="city2"
      :paddingTop="30"
    ></j-location-city>
    <div class="main content">
      <j-button :style="{ marginBottom: '15px' }" @click="show = true" round
        >默认城市数据-{{ city }}</j-button
      >
      <j-button :style="{ marginBottom: '15px' }" @click="show1 = true" round
        >自定义城市参数-{{ city1 }}-locationCity{{ locationCity }}</j-button
      >
      <j-button :style="{ marginBottom: '15px' }" @click="show2 = true" round
        >自定义城市2-tag-参数-{{ city2 }}</j-button
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
      city: "深圳市",
      show1: false,
      city1: "深圳市",
      locationCity: "广州市",
      cityList: [
        {
          code: "城市列表",
          cityList: ["深圳市", "中山市", "东莞市", "广州市", "佛山市"],
        },
      ],

      show2: false,
      city2: "深圳市",
      cityList2: [
        {
          code: "城市列表",
          cityList: ["深圳市", "中山市", "东莞市", "广州市", "佛山市"],
          type: "tag",
        },
      ],
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
