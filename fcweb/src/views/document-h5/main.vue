<template>
  <main class="page-container">
    <div class="page-content">
      <left-menu></left-menu>
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import LeftMenu from './left-menu/main.vue'



// const router = useRouter()

// const navto = (path) => {
//   router.push(`/${path}`)
// }





</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  justify-content: center;
}
</style>
