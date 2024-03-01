<template>
  <main>
    <h1>recordLocal 写入本地缓存数据</h1>
    <h2>{{ "fc.recordLocal(<String> key, <String> value)" }}</h2>
      <p>这是一个写入本地缓存数据的方法，调用此方法写入的本地缓存数据是长期有效的，不会因刷新页面、重新打开app或者开关手机等操作而丢失。如果重复写入，则会覆盖之前的内容。</p>
      <p>调用此方法写入的本地缓存数据只能由 fc.readLocal(key) 读出。</p>
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const jscode = `fc.recordLocal("id", "xxxxx");`;

</script>

<style lang="scss" scoped></style>
