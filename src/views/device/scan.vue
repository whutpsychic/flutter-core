<template>
  <main class="doc-content">
    <h1>scan 混合扫描</h1>
    <h3>{{ "Promise<string>" }}</h3>
    <h3>{{ "fc.scan()" }}</h3>
    <p>调用此方法会通知 App 跳转至扫描页进行扫描操作。</p>
    <p>扫描操作完成后会带着扫描结果返回跳出前的页面。您可以在.then中获取扫码结果。当然，您也可以使用 fc.done() 提前结束操作。</p>
    <p>【注意】此方法可兼顾识别二维码和条形码。相对地，性能会略低于其他单种类扫描。</p>
    <p>【注意】像这种需要借助设备硬件的功能（通常含有原生的页面跳转），结束后不要立即在.then方法中调用类似 alert()
      这种会使程序暂停等待的函数，否则会无法正常运行，甚至丢失返回结果。如果场景需要，请至少等待300ms后再调用此类方法。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.scan().then((res: string) => {
  setTimeout(() => {
    alert(res)
  }, 300)
  if (typeof res === 'string') {
    // ...
  }
  else {
    // '没有拿到结果';
  }
})`;

</script>

<style lang="scss" scoped></style>
