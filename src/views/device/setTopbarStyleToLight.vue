<template>
  <main>
    <h1>setTopbarStyleToLight 设置为浅色风格</h1>
    <h2>{{ "fc.setTopbarStyleToLight()" }}</h2>
    <p>调用此方法将 App 顶部条安全区设置为浅色风格（白色）。</p>
    <p>如果您的设备包含下方安全区，则同效。</p>
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const jscode = `fc.setTopbarStyleToLight();`;

</script>

<style lang="scss" scoped></style>
