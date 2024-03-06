<template>
  <main class="doc-content">
    <h1>打开 App 权限设置</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ `fp.openAppSettings()` }}</h3>
    <p>调用此方法会唤起设备的“系统设置”功能，并跳转至本 App 的权限配置页。</p>
    <h5>{{ `
      <script lang="ts" />` }}
    </h5>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fp } from 'flutter-core';

fp.openAppSettings();`;

</script>

<style lang="scss" scoped></style>
