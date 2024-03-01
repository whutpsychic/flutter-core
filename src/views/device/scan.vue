<template>
  <main>
    <h1>scan 混合扫描</h1>
    <h2>{{ "fc.scan()" }}</h2>
    <p>调用此方法会通知 App 跳转至扫描页进行扫描操作。</p>
    <p>扫描操作完成后会带着扫描结果返回跳出前的页面。当然，您也可以使用 fc.done() 提前结束操作。</p>
    <p>注意：此方法可兼顾识别二维码和条形码。相对地，性能会略低于其他单种类扫描。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
    <p>扫描结束后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。</p>
    <highlightjs language="javascript" :code="jscode2" />
  </main>
</template>

<script setup>

const xmlcode = `<button @click="scan">混合扫描</button>`;

const jscode = `const scan = () => {
  fc.scan();
};`;

const jscode2 = `// 扫码结果
fc.await("scanner", (res) => {
  fc.toast(res);
});`;

</script>

<style lang="scss" scoped></style>
