<template>
  <el-menu class="left-el-menu-vertical" router :default-active="defaultActive">
    <el-menu-item-group title="概览">
      <el-menu-item index="/flutter-core/doc/preview">概述</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="原生功能">
      <el-menu-item index="/flutter-core/doc/toast">Toast 短提示</el-menu-item>
      <el-menu-item index="/flutter-core/doc/modalTips">ModalTips 模态提示</el-menu-item>
      <el-menu-item index="/flutter-core/doc/modalConfirm">ModalConfirm 模态确定询问</el-menu-item>
      <el-menu-item index="/flutter-core/doc/modalLoading">ModalLoading 模态加载中</el-menu-item>
      <el-menu-item index="/flutter-core/doc/modalProgress">ModalProgress 模态进度条</el-menu-item>
      <el-menu-item index="/flutter-core/doc/done">done 通用结束操作</el-menu-item>
      <el-menu-item index="/flutter-core/doc/recordLocal">recordLocal 写入本地缓存数据</el-menu-item>
      <el-menu-item index="/flutter-core/doc/readLocal">readLocal 读取本地缓存数据</el-menu-item>
      <el-menu-item index="/flutter-core/doc/ipconfig">ipconfig IP地址配置</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="设备功能">
      <el-menu-item index="/flutter-core/doc/appUpdate">appUpdate App更新</el-menu-item>
      <el-menu-item index="/flutter-core/doc/phonecall">phonecall 拨打电话</el-menu-item>
      <el-menu-item index="/flutter-core/doc/launchInExplorer">launchInExplorer 浏览器打开</el-menu-item>
      <el-menu-item index="/flutter-core/doc/launchInnerExplorer">launchInnerExplorer 内置浏览器打开</el-menu-item>
      <el-menu-item index="/flutter-core/doc/scanQR">scanQR 扫描二维码</el-menu-item>
      <el-menu-item index="/flutter-core/doc/scanBarcode">scanBarcode 扫描条形码</el-menu-item>
      <el-menu-item index="/flutter-core/doc/scan">scan 混合扫描</el-menu-item>
      <el-menu-item index="/flutter-core/doc/checkNetworkType">checkNetworkType 检查联网类型</el-menu-item>
      <el-menu-item index="/flutter-core/doc/getSafeHeight">getSafeHeight 获取安全高度</el-menu-item>
      <el-menu-item index="/flutter-core/doc/setTopbarStyleToDark">setTopbarStyleToDark 深色风格</el-menu-item>
      <el-menu-item index="/flutter-core/doc/setTopbarStyleToLight">setTopbarStyleToLight 浅色风格</el-menu-item>
      <el-menu-item index="/flutter-core/doc/takePhoto">takePhoto 相机拍照</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="权限请求">
      <el-menu-item index="/flutter-core/doc/permissions/camera">camera 照相机/摄像头</el-menu-item>
      <el-menu-item index="/flutter-core/doc/permissions/storage">storage 读写数据</el-menu-item>
      <el-menu-item index="/flutter-core/doc/permissions/openAppSettings">openAppSettings 打开权限设置</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const defaultActive = ref("/flutter-core/doc/preview");

defaultActive.value = route.fullPath;

</script>

<style lang="scss" scoped>
.left-el-menu-vertical {
  width: 280px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
