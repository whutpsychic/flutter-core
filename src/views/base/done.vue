<template>
  <main class="doc-content">
    <h1>done 操作结束</h1>
    <h3>{{ `fc.done()` }}</h3>
    <h3>{{ `Promise<void>` }}</h3>
    <p>这是一个通用的结束操作方法，用于结束绝大多数由 fc 发起的动作。例如进度条、模态消息等，您需要提前结束的操作。</p>
    <h5>{{ `
      < script />` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `fc.done();`;

</script>

<style lang="scss" scoped></style>
