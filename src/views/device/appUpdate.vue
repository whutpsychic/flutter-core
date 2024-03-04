<template>
  <main>
    <h1>appUpdate App 更新</h1>
    <h3>{{ "fc.appUpdate(<String> url)" }}</h3>
      <p>App 更新方法。</p>
      <p>在 Android 环境下，调用此方法会跳转至 url 地址下载安装新的 App。</p>
      <p>在 iOS 环境下，调用此方法会唤起至 AppStore 软件，并使之跳转至下载此 App 的页面。注意：在 iOS 环境下，参数 url 没有任何作用。跳转至下载此 App 的地址页是在 App 内部固定的。</p>
    <h5>{{ `<script />` }}</h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode = `fc.appUpdate("http://nxbhyt.cn:8280/exam/app/bhyt.apk");`;

</script>

<style lang="scss" scoped></style>
