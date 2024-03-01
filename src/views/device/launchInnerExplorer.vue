<template>
  <main>
    <h1>launchInnerExplorer 内置浏览器打开某网页</h1>
    <h2>{{ "fc.launchInnerExplorer(<String> url)" }}</h2>
    <p>调用此方法会在App内部打开一个浏览器，然后访问某页面。</p>
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const jscode = `fc.launchInnerExplorer("https://www.tencent.com/zh-cn/");`;

</script>

<style lang="scss" scoped></style>
