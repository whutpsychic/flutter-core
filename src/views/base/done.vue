<template>
  <main class="doc-content">
    <h1>done 操作结束</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ `fc.done()` }}</h3>
    <p>这是一个通用的结束操作方法，用于终止大多数由 fc 发起的动作。例如进度条、模态消息等，如果您需要提前结束这些操作，则可以调用此方法。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.done();`;

</script>

<style lang="scss" scoped></style>
