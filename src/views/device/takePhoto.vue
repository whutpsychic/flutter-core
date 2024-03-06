<template>
  <main class="doc-content">
    <h1>takePhoto 相机拍照</h1>
    <h3>{{ "Promise<string>" }}</h3>
    <h3>{{ "fc.takePhoto()" }}</h3>
    <p>调用此方法可直接唤起原生相机进行拍照操作，如果没有开启相机权限则会自动询问。</p>
    <p>监听的返回数据是一个图片文件的 base64 字符串。您可以在.then方法中读取返回结果。</p>
    <p>一般情况下拍照和选取相册图片是同时存在的，并不会用到此功能。然而当用户要求必须现场拍照（不允许从相册找寻图片）时，或者其他特殊需求时才会用到此功能。</p>
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

fc.takePhoto().then((res: string) => {
  setTimeout(() => {
    alert(res)
  }, 1000)
})`;

</script>

<style lang="scss" scoped></style>
