<template>
  <main class="doc-content">
    <h1>checkNetworkType 检查网络连接类型</h1>
    <h3>{{ "Promise<string>" }}</h3>
    <h3>{{ "fc.checkNetworkType()" }}</h3>
    <p>调用此方法会通知 App 检查当前接入网络连接的类型，主要用于识别是移动网 / wifi 或者断网状态。您可以在.then方法里查看状态信息。</p>
    <p>请求权限后可能得到的字符串结果如下：</p>
    <p class="args">ConnectivityResult.bluetooth 蓝牙</p>
    <p class="args">ConnectivityResult.wifi WIFI</p>
    <p class="args">ConnectivityResult.ethernet 以太网</p>
    <p class="args">ConnectivityResult.mobile 移动蜂窝数据</p>
    <p class="args">ConnectivityResult.vpn VPN( Android only )</p>
    <p class="args">ConnectivityResult.other 未知类型 / iOS 使用VPN时</p>
    <el-collapse v-model="collapsed">
      <el-collapse-item :title="`点击展开原文描述`" name="1">
        <el-input v-model="permissionStatus" disabled autosize type="textarea" />
      </el-collapse-item>
    </el-collapse>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';

const collapsed: Ref<boolean> = ref(true);

const permissionStatus: string = `/// Bluetooth: Device connected via bluetooth
  bluetooth,

  /// WiFi: Device connected via Wi-Fi
  wifi,

  /// Ethernet: Device connected to ethernet network
  ethernet,

  /// Mobile: Device connected to cellular network
  mobile,

  /// None: Device not connected to any network
  none,

  /// VPN: Device connected to a VPN
  ///
  /// Note for iOS and macOS:
  /// There is no separate network interface type for [vpn].
  /// It returns [other] on any device (also simulator).
  vpn,

  /// Other: Device is connected to an unknown network
  other`;

const jscode: string = `import { fc } from 'flutter-core';

fc.checkNetworkType().then((res: string) => {
  alert(res)
});`;

</script>

<style lang="scss" scoped></style>
