<template>
  <main>
    <h1>打开 App 权限设置</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ `fp.openAppSettings()` }}</h3>
    <p>调用此方法会唤起设备的“系统设置”功能，并跳转至本 App 的权限配置页。</p>
    <h5>{{ "<template />" }}</h5>
    <highlightjs language="xml" :code="xmlcode" />
    <h5>{{ `
      <script />` }}
    </h5>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>
const xmlcode: string = `<button @click="openAppSettings">打开 App 权限设置</button>`;

const jscode: string = `const openAppSettings = () => {
  fp.openAppSettings();
}`;

</script>

<style lang="scss" scoped></style>
