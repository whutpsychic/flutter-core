<template>
  <main>
    <h1>checkNetworkType 检查网络连接类型</h1>
    <h2>{{ "fc.checkNetworkType()" }}</h2>
    <p>调用此方法会通知 App 检查当前接入网络连接的类型，主要用于识别是 4g / 5g 或者 wifi。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
    <p>检查成功后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。</p>
    <highlightjs language="javascript" :code="jscode2" />
  </main>
</template>

<script setup>

const xmlcode = `<button @click="checkNetworkType">检查网络连接类型</button>`;

const jscode = `const checkNetworkType = () => {
  fc.checkNetworkType();
};`;

const jscode2 = `// 等待网络类型检查结果
fc.await("checkNetworkType", (res) => {
  fc.toast(res);
});`;

</script>

<style lang="scss" scoped></style>
