<template>
  <rtm-app-container>
    <el-button class="btn-item" type="primary" @click="navto('flutter-core')">flutter-core Document</el-button>
    <el-button class="btn-item" type="primary" @click="navto('h5')">h5 components Document</el-button>
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
