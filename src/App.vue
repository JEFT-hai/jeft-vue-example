<!--
 * @Author: your name
 * @Date: 2022-02-18 19:52:32
 * @LastEditTime: 2022-02-20 20:40:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \jeft-vue-demo\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;

    height: 100vh;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .page .main {
    flex: 1;
  }
  .buttonItem {
    margin-bottom: 15px;
  }
</style>
