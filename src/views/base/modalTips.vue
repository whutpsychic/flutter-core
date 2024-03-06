<template>
  <main class="doc-content">
    <h1>modalTips 模态提示</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.modalTips(title: string, msg: string)" }}</h3>
    <p class="args">title: 提示标题; msg: 确认文案。</p>
    <p>模态提示，这是一种高仿真的 flutter 视觉组件，而并不是真实的原生平台组件。</p>
    <p>您可以在.then方法里编写点击确认后的逻辑。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.modalTips('标题', '内容').then(() => {
  alert('接下来的动作')
});`;

</script>

<style lang="scss" scoped></style>
