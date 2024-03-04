<template>
  <main>
    <h1>phonecall 电话拨号</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.phonecall(number: number)" }}</h3>
    <p>调用此方法会进行电话拨号。</p>
    <h5>{{ `
      < script /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `fc.phonecall("13988888888");`;

</script>

<style lang="scss" scoped></style>
