<template>
  <main>
    <h1>setTopbarStyleToDark 设置为深色风格</h1>
    <h2>{{ "fc.setTopbarStyleToDark()" }}</h2>
    <p>调用此方法将 App 顶部条安全区设置为深色风格（黑色）。</p>
    <p>如果您的设备包含下方安全区，则同效。</p>
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const jscode = `fc.setTopbarStyleToDark();`;

</script>

<style lang="scss" scoped></style>
