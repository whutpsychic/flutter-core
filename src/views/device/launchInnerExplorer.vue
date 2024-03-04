<template>
  <main>
    <h1>launchInnerExplorer 内置浏览器打开某网页</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.launchInnerExplorer(url: string)" }}</h3>
    <p>调用此方法会在App内部打开一个浏览器，然后访问某页面。</p>
    <h5>{{ `
      <script />` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `fc.launchInnerExplorer("https://www.tencent.com/zh-cn/");`;

</script>

<style lang="scss" scoped></style>
