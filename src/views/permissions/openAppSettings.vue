<template>
  <main>
    <h1>打开 App 权限设置</h1>
    <h2>{{ `fp.openAppSettings()` }}</h2>
    <p>调用此方法会唤起设备的“系统设置”功能，并跳转至本 App 的权限配置页。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>
const xmlcode = `<button @click="openAppSettings">打开 App 权限设置</button>`;

const jscode = `const openAppSettings = () => {
  fp.openAppSettings();
}`;

</script>

<style lang="scss" scoped></style>
