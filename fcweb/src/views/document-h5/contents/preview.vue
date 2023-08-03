<template>
  <main>
    <h1>概述</h1>
    <p>这一套瑞太研发自用的移动端 App 框架是由 Flutter + h5 构成的。</p>
    <p>Flutter 用于打包成安装程序，以供安装在手机上使用。并负责对接 h5 无法触及的手机原生功能接口，预留了与 h5 通信的桥梁，方便开发主体内容。</p>
    <p>H5 部分负责主体应用内容的开发。如果有与手机端原生功能进行交互的需求请参见《Flutter 速查手册》。</p>
    <p>H5 使用以 Vue3 + Vant4 为主，其他三方资源为辅的开发框架。</p>
    <p>demoApp 预览地址：<a :href="demoUrl">{{ demoUrl }}</a></p>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const demoUrl = ref("https://whutpsychic.gitee.io/rtlink-demoapp/")

</script>

<style lang="scss" scoped></style>
