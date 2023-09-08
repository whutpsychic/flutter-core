<template>
  <div class="top-section">
    <p># Flutter-core Document<span>v{{ version }}</span></p>
  </div>
  <main class="page-container">
    <div class="page-content">
      <left-menu></left-menu>
      <div class="page-main">
        <router-view></router-view>
      </div>
      <!-- <div class="iframe">
        <iframe class="inner-iframe" src="http://192.168.1.33:8082/"></iframe>
      </div> -->
    </div>
  </main>
</template>

<script setup>
import { version } from "@/config.js";
import LeftMenu from './left-menu/main.vue'

</script>

<style lang="scss" scoped>
.top-section {
  width: calc(100vw - 40px);
  height: 60px;
  background-color: white;
  border-bottom: solid 1px #eee;

  p {
    margin: 0 40px;
    line-height: 60px;
    color: #666;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
}

.page-content {
  display: flex;
  justify-content: center;
}

.page-main {
  width: 1100px;
}

.iframe {
  width: 400px;
  height: 720px;
  border: solid 2px #aaa;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 20px;
  -webkit-overflow-scrolling: touch;

  .inner-iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
