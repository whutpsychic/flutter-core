<template>
  <main class="doc-content">
    <h1>launchInExplorer 使用手机浏览器打开某网页</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.launchInExplorer(url: string)" }}</h3>
    <p class="args">url: 网页地址。</p>
    <p>调用此方法会唤起手机的默认浏览器，然后访问地址为 url 的页面。</p>
    <p>【注意】如果您调用此接口打开浏览器，地址参数需要以http/https开头，否则会操作失败。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.launchInExplorer("https://www.baidu.com");`;

</script>

<style lang="scss" scoped></style>
