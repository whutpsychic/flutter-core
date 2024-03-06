<template>
  <main class="doc-content">
    <h1>readLocal 读取本地缓存数据</h1>
    <h3>{{ "Promise<string>" }}</h3>
    <h3>{{ "fc.readLocal(key: string)" }}</h3>
    <p class="args">key: 要读取的缓存键。</p>
    <p>读取本地缓存数据，调用此方法会读取调用 fc.recordLocal(k, v) 存储的本地缓存数据。然后您可以在.then中得到读取的缓存数据。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.readLocal('keystr').then((res: string | null) => {
  fc.toast(\`\${res}\`);
})`;

</script>

<style lang="scss" scoped></style>
