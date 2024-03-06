<template>
  <main class="doc-content">
    <h1>toast 短提示</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.toast(msg: string)" }}</h3>
    <p class="args">msg: 短提示文案。</p>
    <p>这里使用的短提示是一种不可配置的，从屏幕底部弹出的最上层弹框，用于提示用户必要信息。</p>
    <p>这种短提示是排队任务，如果频繁调用，则会将调用的历史记录全部安排至队列，然后逐一显示。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.toast("这是一则短提示消息！");`;

</script>

<style lang="scss" scoped></style>
