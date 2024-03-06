<template>
  <main class="doc-content">
    <h1>phonecall 电话拨号</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.phonecall(number: string)" }}</h3>
    <p class="args">number: 要拨打的号码。</p>
    <p>调用此方法会进行电话拨号。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.phonecall("13988888888");`;

</script>

<style lang="scss" scoped></style>
