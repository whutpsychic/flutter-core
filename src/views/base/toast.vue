<template>
  <main>
    <h1>Toast 短提示</h1>
    <h2>{{ "fc.toast(<String> msg)" }}</h2>
    <p>这里使用的短提示是一种不可配置的，从屏幕底部弹出的最上层弹框，用于提示用户必要信息。</p>
    <p>这种短提示是排队任务，如果频繁调用，则会将调用的历史记录全部安排至队列，然后一一显示。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}
    </h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>
const xmlcode = `<button @click="toast">Toast 短提示</button>`;

const jscode = `const toast = () => {
  fc.toast("这是一则短提示消息！");
};`;

</script>

<style lang="scss" scoped></style>
