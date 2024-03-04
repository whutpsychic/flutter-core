<template>
  <main>
    <h1>launchInExplorer 使用手机浏览器打开某网页</h1>
    <h3>{{ "Promise<void>" }}</h3>
    <h3>{{ "fc.launchInExplorer(url: string)" }}</h3>
    <p>调用此方法会唤起手机的默认浏览器，然后访问某页面。</p>
    <h5>{{ `
      <script />` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode:string = `fc.launchInExplorer("https://www.baidu.com");`;

</script>

<style lang="scss" scoped></style>
