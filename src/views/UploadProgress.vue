<!--
 * @Author: your name
 * @Date: 2022-02-20 22:57:15
 * @LastEditTime: 2022-02-20 23:08:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\views\UploadProgress.vue
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
  <div class="upload-progress page">
    <j-nav-bar
      leftArrow
      title="upload-progress"
      @click-left="goBack"
    ></j-nav-bar>
    <div class="main content">
      <j-button :style="{ marginBottom: '15px' }" @click="showProgress" round
        >上传成功</j-button
      >
      <j-button :style="{ marginBottom: '15px' }" @click="showProgressErr" round
        >上传失败</j-button
      >
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
    showProgress() {
      let i = 0;
      let timer = setInterval(() => {
        this.$process(10 * i);
        i += 1;
        if (i == 10) {
          this.$process({
            status: "success",
          });
          clearInterval(timer);
        }
      }, 1000);
    },
    showProgressErr() {
      let i = 0;
      let timer = setInterval(() => {
        this.$process(10 * i);
        i += 1;
        if (i == 10) {
          this.$process({
            status: "error",
            text: "参数错误...",
          });
          clearInterval(timer);
        }
      }, 1000);
    },
  },
};
</script>

<style lang='less'>
  .content {
    padding: 20px;
  }
</style>