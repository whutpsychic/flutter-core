<template>
  <main>
    <h1>scanBarcode 扫描条形码</h1>
    <h3>{{ "Promise<string>" }}</h3>
    <h3>{{ "fc.scanBarcode()" }}</h3>
    <p>调用此方法会通知 App 跳转至扫描页进行扫描操作。</p>
    <p>扫描操作完成后会带着扫描结果返回跳出前的页面。当然，您也可以使用 fc.done() 提前结束操作。</p>
    <p>注意：此方法只能扫描条形码，不能扫描二维码。相对地，性能会略高于混合扫描。</p>
    <h5>{{ "<template />" }}</h5>
    <highlightjs language="xml" :code="xmlcode" />
    <h5>{{ `
      <script />` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
    <p>扫描结束后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。</p>
    <highlightjs language="typescript" :code="jscode2" />
  </main>
</template>

<script lang="ts" setup>

const xmlcode: string = `<button @click="scanBarcode">扫描条形码</button>`;

const jscode: string = `const scanBarcode = () => {
  fc.scanBarcode();
};`;

const jscode2: string = `// 扫码结果
fc.await("scanner", (res) => {
  fc.toast(res);
});`;

</script>

<style lang="scss" scoped></style>
