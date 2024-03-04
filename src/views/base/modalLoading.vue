<template>
  <main class="doc-content">
    <h1>modalLoading 模态加载中</h1>
    <h3>{{ "Promise<boolean>" }}</h3>
    <h3>{{ "fc.modalLoading(content: string)" }}</h3>
    <p>这里是一个加载中的提示，位于整个页面的最上层。</p>
    <h5>{{ `<template />` }}</h5>
    <highlightjs language="xml" :code="xmlcode" />
    <h5>{{ `
      < script /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>
const xmlcode: string = `<button @click="modalLoading">模态确认询问</button>`;

const jscode: string = `// 显示加载中，3秒后关闭
const modalLoading = () => {
  fc.modalLoading("加载中...");
  setTimeout(() => { fc.done() }, 3000);
};`;

</script>

<style lang="scss" scoped></style>
