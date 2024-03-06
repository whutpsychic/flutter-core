<template>
  <main class="doc-content">
    <h1>appUpdate App 更新</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.appUpdate(url: string, filename: string)" }}</h3>
    <p class="args">url: Android端新apk下载地址; filename: 下载至本地后的文件命名。</p>
    <p>App 更新方法。</p>
    <p>在 Android 环境下，调用此方法会跳转至 url 地址下载安装新的 App。</p>
    <p>在 iOS 环境下，调用此方法会唤起至 AppStore 软件，并使之跳转至下载此 App 的页面。注意：在 iOS 环境下，参数 url、filename 没有任何作用。跳转至下载此 App 的地址页是在 App
      内部固定的。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.appUpdate("http://nxbhyt.cn:8280/exam/app/bhyt.apk","bhyt");`;

</script>

<style lang="scss" scoped></style>
