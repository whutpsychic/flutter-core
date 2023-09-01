<template>
  <main>
    <h1>ipconfig IP地址配置页</h1>
    <h2>{{ "fc.ipconfig()" }}</h2>
    <p>跳转至 App 外壳的 ip 地址配置页，配置的ip地址将会决定 App 显示的是什么内容。</p>
    <p>在调试模式下，App 监听了“摇一摇”动作，会询问用户是否要跳转至ip配置页。产品模式下没有此功能。但是无论在哪种模式下，您都可以通过调用此代码使 App 跳转至该页面。</p>
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const jscode = `fc.ipconfig();`;

</script>

<style lang="scss" scoped></style>
