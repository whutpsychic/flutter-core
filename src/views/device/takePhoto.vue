<template>
  <main>
    <h1>takePhoto 相机拍照</h1>
    <h2>{{ "fc.takePhoto()" }}</h2>
    <p>调用此方法可直接唤起原生相机进行拍照操作，如果没有开启相机权限则会自动询问。</p>
    <p>监听的返回数据是一个图片文件的 base64 字符串。</p>
    <p>一般情况下拍照和选取相册图片是同时存在的，并不会用到此功能。然而当用户要求必须现场拍照（不允许从相册找寻图片）时，或者其他特殊需求时才会用到此功能。</p>
    <h3>{{ "<template />" }}</h3>
    <highlightjs language="xml" :code="xmlcode" />
    <h3>{{ "<script />" }}</h3>
    <highlightjs language="javascript" :code="jscode" />
    <p>拍完照片后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。</p>
    <highlightjs language="javascript" :code="jscode2" />
  </main>
</template>

<script setup>

const xmlcode = `<button @click="takePhoto">相机拍照</button>`;

const jscode = `const takePhoto = () => {
  fc.takePhoto();
};`;

const jscode2 = `// 拍照监听
fc.await("takePhoto", (res) => {
  fc.toast(res);
});`;

</script>

<style lang="scss" scoped></style>
