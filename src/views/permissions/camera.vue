<template>
  <main>
    <h1>请求照相机 / 摄像机权限</h1>
    <h2>{{ `fp.request("camera")` }}</h2>
    <p>调用此方法通知 flutter 向设备请求相关权限。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
    <p>同样地，您需要注册事后监听函数</p>
    <highlightjs language="javascript" :code="jscode2" />
  </main>
</template>

<script setup>
const xmlcode = `<button @click="getCamera">请求照相机/摄像头权限</button>`;

const jscode = `const getCamera = () => {
  fp.request("camera");
}`;

const jscode2 = `// 注册权限请求之后的动作函数
fp.await("camera", (res) => {
  if (res === fp.status.denied) {
    fc.toast("需要申请")
  } else if (res === fp.status.permanentlyDenied) {
    fc.toast("您申请的权限已被禁止，您需要在系统设置中设置此应用的权限")
  }
  else if (res === fp.status.granted) {
    fc.toast("您申请的权限已获批准")
  }
});`;
</script>

<style lang="scss" scoped></style>
