<template>
  <div class="m-can">
    <ul>
      <li><el-button class="btn-item" type="primary" @click="navto('pullable-list')">一般下拉刷新列表</el-button></li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const navto = (path) => {
  router.push(`/code-generator/${path}`)
}

</script>

<style lang="scss" scoped>
.m-can {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    li {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
    }
  }
}

.btn-item {
  margin-bottom: 20px;
}
</style>
