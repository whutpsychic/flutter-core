<template>
  <main class="doc-content">
    <h1>setTopbarStyleToDark 设置为深色风格</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.setTopbarStyleToDark()" }}</h3>
    <p>调用此方法将 App 顶部条安全区设置为深色风格（黑色）。在iPhone条件下调用此接口会将您的手机顶部信息文字设置为黑色，反之为白色，而不是设置背景色。</p>
    <p>如果您的设备包含下方安全区，则同效。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.setTopbarStyleToDark();`;

</script>

<style lang="scss" scoped></style>
