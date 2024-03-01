<template>
  <main>
    <h1>readLocal 读取本地缓存数据</h1>
    <h2>{{ "fc.recordLocal(<String> key, <String> value)" }}</h2>
    <p>读取本地缓存数据，调用此方法会读取调用 fc.recordLocal(k, v) 存储的本地缓存数据。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
    <p>在读取到数据之后进行某些操作时，您需要在 mounted 或者 created 处注册监听返回的函数。后续的任务可以在回调函数中进行。</p>
    <highlightjs language="javascript" :code="jscode2" />
  </main>
</template>

<script setup>

const xmlcode = `<button @click="readLocalData">读取缓存数据</button>`;

const jscode = `const readLocalData = () => {
  fc.readLocal("id");
};`;

const jscode2 = `// 读取数据
fc.await("readLocal", (res) => {
  fc.toast(res);
});`;

</script>

<style lang="scss" scoped></style>
