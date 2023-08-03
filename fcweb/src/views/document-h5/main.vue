<template>
  <main class="page-container">
    <div class="page-content">
      <left-menu></left-menu>
      <div class="page-main">
        <router-view></router-view>
      </div>
      <div class="iframe">
        <iframe class="inner-iframe" width="400" height="720" src="http://192.168.1.33:8080/#/h5demo/form"></iframe>
      </div>
    </div>
  </main>
</template>

<script setup>
import LeftMenu from './left-menu/main.vue'

</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  justify-content: center;
}

.page-main {
  width: 1100px;
}

.iframe {
  border: solid 2px #aaa;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 20px;

  .inner-iframe {
    border: none;
  }
}
</style>
