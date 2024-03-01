<template>
  <main>
    <h1>ModalConfirm 模态确定询问</h1>
    <h2>{{ "fc.modalConfirm(<String> title, <String> content)" }}</h2>
    <p>这里是调用各平台的原生模态提示的方法，这是一种高仿真的视觉组件，调用的是 flutter 视觉组件，而并不是真实的原生平台组件。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
    <p>如果您需要在模态提示时暂停任务，并在用户点击“确定 / 取消”之后继续任务，那么您可以在 mounted 或者 created 处注册监听返回的函数。后续的任务可以在回调函数中进行。</p>
    <highlightjs language="javascript" :code="jscode2" />
  </main>
</template>

<script setup>
const xmlcode = `<button @click="modalConfirm">模态确认询问</button>`;

const jscode = `const modalConfirm = () => {
  fc.modalConfirm("标题", "您确定要这样做吗？");
};`;

const jscode2 = `// 如果需要在提示时暂停并且等待回馈，那么需要注册此函数
fc.await("modalConfirm", (res) => {
  fc.toast(res);
});`;
</script>

<style lang="scss" scoped></style>
