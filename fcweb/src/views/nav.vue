<template>
  <div class="m-can">
    <ul>
      <li><el-button class="btn-item" type="primary" @click="navto('flutter-core')">flutter-core Document</el-button></li>
      <li><el-button class="btn-item" type="primary" @click="navto('h5')">h5 components Document</el-button></li>
      <li><el-button class="btn-item" type="primary" @click="navto2('http://whutpsychic.gitee.io/rtlink-ui-plus/#/document/Icons')">rtlink-ui-plus Document</el-button></li>
      <li><el-button class="btn-item" type="primary" @click="navto2('http://whutpsychic.gitee.io/rtlink-core/#/document/deepClone')">rtlink-core Document</el-button></li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navto = (path) => {
  router.push(`/${path}`)
}

const navto2 = (path) => {
  window.location.href = path
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
