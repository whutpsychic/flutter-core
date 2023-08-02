<template>
  <rtm-app-container>
    <van-button class="btn-item" type="primary" @click="navto('home')">flutter-core Document</van-button>
    <van-button class="btn-item" type="primary" @click="navto('flutter-core')">h5 components Document</van-button>
  </rtm-app-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navto = (path) => {
  router.push(`/${path}`)
}

</script>

<style lang="scss" scoped>
.btn-item {
  margin-bottom: 20px;
}
</style>
