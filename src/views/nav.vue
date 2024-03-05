<template>
  <div class="nav-page-container">
    <div class="btn-wrapper">
      <ul>
        <li><el-button type="primary" @click="() => navTo('/home/done')">Flutter Document</el-button></li>
        <li><el-button type="primary" @click="() => navTo('/test-demo')">Test Demo</el-button></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fc } from '$/index';
import tool from '@/tool';

const router = useRouter();
let initialized = false;

fc.init().then((success: boolean) => {
  if (success) {
    initialized = true;

    // 自动跳转
    const _isMobile: boolean = tool.isMobile();

    if (_isMobile) {
      navTo(`/test-demo`);
    } else {
      navTo(`/home/done`);
    }
  }
})

const navTo = (path: string): void => {
  if (initialized) {
    router.push(path);
  }
}
</script>

<style scoped>
.nav-page-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-wrapper {
  width: 400px;
  min-height: 400px;
}

.btn-wrapper li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}
</style>
