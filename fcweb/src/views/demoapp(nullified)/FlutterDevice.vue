<template>
  <main>
    <van-button class="btn-item" type="primary" block @click="appUpdate">App更新</van-button>
    <van-button class="btn-item" type="primary" block @click="phonecall">拨打电话: 139 8888 8888</van-button>
    <van-button class="btn-item" type="primary" block @click="launchInExplorer">在外部浏览器中打开网页（百度）</van-button>
    <van-button class="btn-item" type="primary" block @click="launchInnerExplorer">在内嵌浏览器中打开网页（腾讯）</van-button>
    <van-button class="btn-item" type="primary" block @click="scanQR">扫描二维码</van-button>
    <van-button class="btn-item" type="primary" block @click="scanBarcode">扫描条形码</van-button>
    <van-button class="btn-item" type="primary" block @click="scan">混合扫描(二维码或者条形码)</van-button>
    <van-button class="btn-item" type="primary" block @click="androidBattery">Android 获取电池电量</van-button>
    <van-button class="btn-item" type="primary" block @click="androidTost">Android 原生Toast</van-button>
    <van-button class="btn-item" type="primary" block @click="checkNetwork">检查网络连接</van-button>
    <van-button class="btn-item" type="primary" block @click="checkNetworkType">检查网络连接类型</van-button>
  </main>
</template>

<script>
import fc from "flutter-core/index"
import { android } from "flutter-core/platform.js"

export default {
  mounted() {
    // 扫码结果
    fc.await("scanner", (res) => {
      fc.toast(res)
    })

    // 电池电量
    android.await("batteryInfo", (res) => {
      fc.toast(`电池电量${res}%`)
    })

    // 等待网络检查结果
    fc.await("connectivityCheck", (res) => {
      fc.toast(res)
    })

    // 等待网络类型检查结果
    fc.await("connectionTypeCheck", (res) => {
      fc.toast(res)
    })
  },
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
    scanQR() {
      fc.scanQR()
    },
    scanBarcode() {
      fc.scanBarcode()
    },
    scan() {
      fc.scan()
    },
    androidBattery() {
      android.getBatteryInfo()
    },
    androidTost() {
      android.toast("Android 原生短提示信息！")
    },
    checkNetwork() {
      fc.checkNetwork()
    },
    checkNetworkType() {
      fc.checkNetworkType()
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
