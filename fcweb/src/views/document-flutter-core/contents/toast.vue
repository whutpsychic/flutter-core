<template>
  <main>
    <h1>Toast 短提示</h1>
    <p>这里使用的短提示是一种不可配置的，从屏幕底部弹出的最上层弹框，用于提示用户必要信息。</p>
    <h2>Attributes</h2>
    <highlightjs language="xml" :code="xmlcode" />
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>
const xmlcode = `<template>
  <button @click='toast'>Toast 短提示</button>
</template>`;

const jscode = `const toast = () => {
  fc.toast('这是一则短提示消息！');
};`;

</script>

<style lang="scss" scoped></style>
