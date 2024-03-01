<template>
  <main>
    <h1>launchInExplorer 使用手机浏览器打开某网页</h1>
    <h2>{{ "fc.launchInExplorer(<String> url)" }}</h2>
    <p>调用此方法会唤起手机的默认浏览器，然后访问某页面。</p>
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const jscode = `fc.launchInExplorer("https://www.baidu.com");`;

</script>

<style lang="scss" scoped></style>
