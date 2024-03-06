<template>
  <main class="doc-content">
    <h1>launchInnerExplorer 内置浏览器打开某网页</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.launchInnerExplorer(url: string)" }}</h3>
    <p class="args">url: 网页地址。</p>
    <p>调用此方法会在App内部打开一个浏览器，然后访问某页面。</p>
    <p>【注意】如果您调用此接口打开浏览器，地址参数需要以http/https开头，否则会操作失败。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.launchInnerExplorer("https://www.tencent.com/zh-cn/");`;

</script>

<style lang="scss" scoped></style>
