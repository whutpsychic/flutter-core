<template>
  <main class="doc-content">
    <h1>modalConfirm 模态确定询问</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.modalConfirm(title: string, content: string)" }}</h3>
    <p class="args">title: 标题; content: 确认文案。</p>
    <p>模态确认，这是一种高仿真的 flutter 视觉组件，而并不是真实的原生平台组件。</p>
    <p>您可以在.then方法里编写点击确认后的逻辑，.chatch方法里编写点击取消后的逻辑。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

// 在点确认时进入then，取消时进入catch
fc.modalConfirm('确认标题', '一段文字介绍内容')
  // 确认动作
  .then(() => {
    alert('您选择了确认');
  })
  // 取消动作
  .catch(() => {
    alert('您选择了取消');
  });`;

</script>

<style lang="scss" scoped></style>
