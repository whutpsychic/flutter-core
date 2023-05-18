<template>
  <main>
    <van-button class="btn-item" type="primary" block @click="getCamera">请求照相机/摄像头权限</van-button>
    <van-button class="btn-item" type="primary" block @click="getStorage">请求读写数据权限</van-button>
    <van-button class="btn-item" type="primary" block @click="openAppSettings">打开 App 权限设置</van-button>
  </main>
</template>

<script>
import fc from "@/flutter-core/index"
import fp from "@/flutter-core/permissions.js"

export default {
  mounted() {
    // 注册权限请求之后的动作函数
    fp.await("camera", (res) => {
      if (res === fp.status.denied) {
        fc.toast("需要申请")
      } else if (res === fp.status.permanentlyDenied) {
        fc.toast("您申请的权限已被禁止，您需要在系统设置中设置此应用的权限")
      }
      else if (res === fp.status.granted) {
        fc.toast("您申请的权限已获批准")
      }
    })
    // 模态确认询问时等待回馈，需要注册此函数
    fp.await("storage", (res) => {
      fc.toast(res)
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
    openAppSettings() {
      fp.openAppSettings()
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
