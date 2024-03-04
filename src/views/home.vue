<template>
  <header class="top-header">
    <p><img class="logo" alt="" :src="rtlinkLogo" /><span>Flutter-core Document</span><span>v{{ version }}</span></p>
  </header>
  <main class="page-container">
    <div class="page-content">
      <left-menu></left-menu>
      <div class="page-main">
        <router-view></router-view>
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import LeftMenu from '@/components/LeftMenu.vue';
import { version } from '../../package.json';
import rtlinkLogo from '@/assets/img/logo.png';

const router = useRouter();


</script>

<style lang="scss" scoped>
.top-header {
  width: calc(100vw - 40px);
  height: 60px;
  background-color: white;
  border-bottom: solid 1px #eee;

  p {
    margin: 0 40px;
    height: 60px;
    line-height: 60px;
    color: #666;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    height: 50%;
  }
}

.page-content {
  display: flex;
  justify-content: center;
}

.page-main {
  width: 1100px;
}
</style>
