<template>
  <div class="nav-page-container">
    <div class="btn-wrapper">
      <ul>
        <li><el-button type="primary" @click="() => navTo('/home')">Flutter Document</el-button></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navTo = (path: string): void => {
  router.push(path);
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
  /* background-color: orange; */
}

.btn-wrapper li {
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}
</style>
