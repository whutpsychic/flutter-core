<template>
  <main class="doc-content">
    <h1>recordLocal 写入本地缓存数据</h1>
    <h3>{{ "Promise<boolean>" }}</h3>
    <h3>{{ "fc.recordLocal(key: string, value: string)" }}</h3>
    <p class="args">key: 要写入的缓存键; value: 要写入的缓存数据。</p>
    <p>这是一个写入本地缓存数据的方法，调用此方法写入的本地缓存数据是长期有效的，不会因刷新页面、重新打开app或者开关手机等操作而丢失。如果重复写入，则会覆盖之前的内容。</p>
    <p>调用此方法写入的本地缓存数据只能由 fc.readLocal(key) 读出。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.recordLocal('keystr', '这是一段编写好的内容').then((success: boolean) => {
  if (success) {
    alert('写入本地缓存成功');
  }
  return fc.readLocal('keystr');
}).then((res: string | null) => {
  fc.toast(\`\${res}\`);
})`;

</script>

<style lang="scss" scoped></style>
