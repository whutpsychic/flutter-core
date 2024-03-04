<template>
  <main class="doc-content">
    <h1>modalProgress 模态进度条</h1>
    <h3>{{ "Promise<boolean>" }}</h3>
    <h3>{{ "fc.modalProgress(content: string)" }}</h3>
    <p>这里是一个进度条提示，位于整个页面的最上层，用于向用户表达任务进程。</p>
    <p>fc.modalProgressAdd 是在进度条框展示后，给条添加进度的方法，累计值最大为1，即大于等于1后，进度条便会加满。</p>
    <h5>{{ "<template />" }}</h5>
    <highlightjs language="xml" :code="xmlcode" />
    <h5>{{ `
      < script /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>
const xmlcode: string = `<button @click="modalProgress">模态进度条</button>`;

const jscode: string = `//
const modalProgress = () => {
  fc.modalProgress("正在处理...");
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 1000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 2000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 3000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 4000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 5000);
  setTimeout(() => { fc.done() }, 6000);
};`;

</script>

<style lang="scss" scoped></style>
