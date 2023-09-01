<template>
  <main>
    <h1>Done 操作结束</h1>
    <h2>{{ "fc.done()" }}</h2>
    <p>这是一个通用的结束操作方法，用于结束绝大多数由 fc 发起的动作。</p>
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const jscode = `fc.done();`;

</script>

<style lang="scss" scoped></style>
