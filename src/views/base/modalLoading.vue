<template>
  <main class="doc-content">
    <h1>modalLoading 模态加载中</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.modalLoading(content: string)" }}</h3>
    <p class="args">content: 提示文案。</p>
    <p>这里是一个加载中的提示，位于整个页面的最上层。同样地可以使用 fc.done() 来提前结束进程。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

// 显示加载中，3秒后关闭
fc.modalLoading("加载中...");
setTimeout(() => { fc.done() }, 3000);
`;

</script>

<style lang="scss" scoped></style>
