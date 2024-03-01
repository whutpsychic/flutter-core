<template>
  <main>
    <h1>ModalLoading 模态加载中</h1>
    <h2>{{ "fc.modalLoading(<String> content)" }}</h2>
    <p>这里是一个加载中的提示，位于整个页面的最上层。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>
const xmlcode = `<button @click="modalLoading">模态确认询问</button>`;

const jscode = `// 显示加载中，3秒后关闭
const modalLoading = () => {
  fc.modalLoading("加载中...");
  setTimeout(() => { fc.done() }, 3000);
};`;

</script>

<style lang="scss" scoped></style>
