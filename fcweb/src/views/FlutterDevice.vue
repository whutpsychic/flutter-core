<template>
  <main>
    <van-button class="btn-item" type="primary" block @click="appUpdate">App更新</van-button>
    <van-button class="btn-item" type="primary" block @click="phonecall">拨打电话: 139 8888 8888</van-button>
    <van-button class="btn-item" type="primary" block @click="launchInExplorer">在外部浏览器中打开网页（百度）</van-button>
    <van-button class="btn-item" type="primary" block @click="launchInnerExplorer">在内嵌浏览器中打开网页（腾讯）</van-button>
  </main>
</template>

<script>
import fc from "@/flutter-core/index"

export default {
  methods: {
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
