<template>
  <main>
    <h1>请求读写数据权限</h1>
    <h3>{{ `fp.request("storage")` }}</h3>
    <p>调用此方法通知 flutter 向设备请求相关权限。</p>
    <h5>{{ "<template />" }}</h5>
    <highlightjs language="xml" :code="xmlcode" />
    <h5>{{ "<script />" }}</h5>
    <highlightjs language="javascript" :code="jscode" />
    <p>同样地，您需要注册事后监听函数</p>
    <highlightjs language="javascript" :code="jscode2" />
  </main>
</template>

<script lang="ts" setup>
const xmlcode = `<button @click="getStorage">请求读写数据权限</button>`;

const jscode = `const getStorage = () => {
  fp.request("storage");
}`;

const jscode2 = `// 注册权限请求之后的动作函数
fp.await("storage", (res) => {
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
