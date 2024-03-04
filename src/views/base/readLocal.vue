<template>
  <main class="doc-content">
    <h1>readLocal 读取本地缓存数据</h1>
    <h3>{{ "Promise<string>" }}</h3>
    <h3>{{ "fc.readLocal(key: string)" }}</h3>
    <p>读取本地缓存数据，调用此方法会读取调用 fc.recordLocal(k, v) 存储的本地缓存数据。</p>
    <h5>{{ "<template />" }}</h5>
    <highlightjs language="xml" :code="xmlcode" />
    <h5>{{ `
      < script /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
    <p>在读取到数据之后进行某些操作时，您需要在 mounted 或者 created 处注册监听返回的函数。后续的任务可以在回调函数中进行。</p>
    <highlightjs language="typescript" :code="jscode2" />
  </main>
</template>

<script lang="ts" setup>

const xmlcode: string = `<button @click="readLocalData">读取缓存数据</button>`;

const jscode: string = `const readLocalData = () => {
  fc.readLocal("id");
};`;

const jscode2: string = `// 读取数据
fc.await("readLocal", (res) => {
  fc.toast(res);
});`;

</script>

<style lang="scss" scoped></style>
