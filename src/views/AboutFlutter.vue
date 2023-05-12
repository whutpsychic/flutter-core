<template>
  <main>
    <van-button class="btn-item" type="primary" block @click="toast">Toast 短提示</van-button>
    <van-button class="btn-item" type="primary" block @click="modalTips">模态提示</van-button>
    <van-button class="btn-item" type="primary" block @click="modalConfirm">模态确认询问</van-button>
    <van-button class="btn-item" type="primary" block @click="modalLoading">模态加载中</van-button>
    <van-button class="btn-item" type="primary" block @click="modalProgress">模态进度条</van-button>
    <van-button class="btn-item" type="primary" block @click="appUpdate">App更新</van-button>
    <van-button class="btn-item" type="primary" block @click="phonecall">拨打电话: 139 8888 8888</van-button>
    <van-button class="btn-item" type="primary" block @click="launchInExplorer">在外部浏览器中打开网页（百度）</van-button>
    <van-button class="btn-item" type="primary" block @click="launchInnerExplorer">在内嵌浏览器中打开网页（腾讯）</van-button>
  </main>
</template>

<script>
import fc from "@/flutter-core/index"

export default {
  mounted() {
    // 如果需要在提示时暂停并且等待回馈，那么需要注册此函数
    fc.register("modalTipsCallback", (res) => {
      alert(res)
    })
    // 模态确认询问时等待回馈，需要注册此函数
    fc.register("modalConfirmCallback", (res) => {
      alert(res)
    })
  },
  unmounted() {
    // 退出页面后卸载这些页面内注册的监听函数
    fc.unregister("modalTipsCallback")
    fc.unregister("modalConfirmCallback")
  },
  methods: {
    toast() {
      fc.toast("这是一则短提示消息！")
    },
    modalTips() {
      fc.modalTips("标题", "这是一则重要提示！")
    },
    modalConfirm() {
      fc.modalConfirm("标题", "您确定要这样做吗？")
    },
    modalLoading() {
      fc.modalLoading("加载中........")
      setTimeout(() => { fc.done() }, 3000)
    },
    modalProgress() {
      fc.modalProgress("正在处理.......")
      setTimeout(() => { fc.modalProgressAdd(0.2) }, 1000)
      setTimeout(() => { fc.modalProgressAdd(0.2) }, 2000)
      setTimeout(() => { fc.modalProgressAdd(0.2) }, 3000)
      setTimeout(() => { fc.modalProgressAdd(0.2) }, 4000)
      setTimeout(() => { fc.modalProgressAdd(0.2) }, 5000)
      setTimeout(() => { fc.done() }, 6000)
    },
    appUpdate() {
      fc.appUpdate("http://nxbhyt.cn:8280/exam/app/bhyt.apk")
    },
    phonecall() {
      fc.phonecall("13988888888")
    },
    launchInExplorer() {
      fc.launchInExplorer("https://www.baidu.com")
    },
    launchInnerExplorer() { 
      fc.launchInnerExplorer("https://www.tencent.com/zh-cn/")
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
