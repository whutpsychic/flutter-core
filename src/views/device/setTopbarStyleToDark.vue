<template>
  <main>
    <h1>setTopbarStyleToDark 设置为深色风格</h1>
    <h3>{{ "fc.setTopbarStyleToDark()" }}</h3>
    <p>调用此方法将 App 顶部条安全区设置为深色风格（黑色）。</p>
    <p>如果您的设备包含下方安全区，则同效。</p>
    <h5>{{ `<script />` }}</h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode = `fc.setTopbarStyleToDark();`;

</script>

<style lang="scss" scoped></style>
