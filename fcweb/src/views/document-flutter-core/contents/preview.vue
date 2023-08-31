<template>
  <main>
    <h1>概述</h1>
    <p>这里讲述的是如何使用 flutter-core 调用原生的或者设备端的功能。</p>
    <p>一般情况下，所有的接口和函数调用之后所产生的效果在 Android 端和 iOS 端是一致的。</p>
    <h2>安装</h2>
    <highlightjs language="javascript" :code="install" />
    <h2>引入</h2>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const install = `npm install flutter-core -s`;

const jscode = `import fc from "flutter-core";
import fp from "flutter-core/permissions.js";`;

</script>

<style lang="scss" scoped></style>
