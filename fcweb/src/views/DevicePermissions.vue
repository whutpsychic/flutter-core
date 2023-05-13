<template>
  <main>
    <van-button class="btn-item" type="primary" block @click="getCamera">请求照相机/摄像头权限</van-button>
    <van-button class="btn-item" type="primary" block @click="getStorage">请求读写数据权限</van-button>
  </main>
</template>

<script>
import fp from "@/flutter-core/permissions"

export default {
  mounted() {
    // 注册权限请求之后的动作函数
    fp.await("camera", (res) => {
      alert(res)
    })
    // 模态确认询问时等待回馈，需要注册此函数
    fp.await("storage", (res) => {
      alert(res)
    })
  },
  unmounted() {
    // 退出页面后卸载这些页面内注册的监听函数
    fp.uninstall("camera")
    fp.uninstall("storage")
  },
  methods: {
    getCamera() {
      fp.request("camera")
    },
    getStorage() {
      fp.request("storage")
    },
  }
}

</script>

<style lang="scss" scoped>
main {
  padding: 20px;

  .btn-item {
    margin-bottom: 20px;
  }
}
</style>
