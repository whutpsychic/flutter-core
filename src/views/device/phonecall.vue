<template>
  <main>
    <h1>phonecall 电话拨号</h1>
    <h2>{{ "fc.phonecall(<String> number)" }}</h2>
    <p>调用此方法会进行电话拨号。</p>
    <h3>{{ "<script />" }}
    </h3>
    <highlightjs language="javascript" :code="jscode" />
  </main>
</template>

<script setup>

const jscode = `fc.phonecall("13988888888");`;

</script>

<style lang="scss" scoped></style>
