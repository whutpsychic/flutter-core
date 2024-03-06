<template>
  <el-menu class="left-el-menu-vertical" default-active="/home/done" router unique-opened>
    <el-sub-menu index="base">
      <template #title>
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>基础功能</span>
      </template>
      <el-menu-item index="/home/done">done 结束操作</el-menu-item>
      <el-menu-item index="/home/ipconfig">ipConfig IP地址配置</el-menu-item>
      <el-menu-item index="/home/modalConfirm">modalConfirm 模态确定询问</el-menu-item>
      <el-menu-item index="/home/modalLoading">modalLoading 模态加载中</el-menu-item>
      <el-menu-item index="/home/modalProgress">modalProgress 模态进度条</el-menu-item>
      <el-menu-item index="/home/modalTips">modalTips 模态提示</el-menu-item>
      <el-menu-item index="/home/readLocal">readLocal 读取本地缓存数据</el-menu-item>
      <el-menu-item index="/home/recordLocal">recordLocal 写入本地缓存数据</el-menu-item>
      <el-menu-item index="/home/toast">toast 短提示</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="device">

      <template #title>
        <el-icon>
          <Iphone />
        </el-icon>
        <span>设备功能</span>
      </template>
      <el-menu-item index="/home/appUpdate">appUpdate App更新</el-menu-item>
      <el-menu-item index="/home/checkNetworkType">checkNetworkType 检查联网类型</el-menu-item>
      <el-menu-item index="/home/getSafeHeight">getSafeHeight 获取安全高度</el-menu-item>
      <el-menu-item index="/home/launchInExplorer">launchInExplorer 浏览器打开</el-menu-item>
      <el-menu-item index="/home/launchInnerExplorer">launchInnerExplorer 内置浏览器打开</el-menu-item>
      <el-menu-item index="/home/phonecall">phonecall 拨打电话</el-menu-item>
      <el-menu-item index="/home/scan">scan 混合扫描</el-menu-item>
      <el-menu-item index="/home/scanQR">scanQR 扫描二维码</el-menu-item>
      <el-menu-item index="/home/scanBarcode">scanBarcode 扫描条形码</el-menu-item>
      <el-menu-item index="/home/setTopbarStyleToDark">setTopbarStyleToDark 深色风格</el-menu-item>
      <el-menu-item index="/home/setTopbarStyleToLight">setTopbarStyleToLight 浅色风格</el-menu-item>
      <el-menu-item index="/home/takePhoto">takePhoto 相机拍照</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="permission">

      <template #title>
        <el-icon>
          <Paperclip />
        </el-icon>
        <span>权限申请</span>
      </template>
      <el-menu-item index="/home/permissions/request">request 请求权限</el-menu-item>
      <el-menu-item index="/home/permissions/openAppSettings">openAppSettings 打开权限设置</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { Menu as IconMenu, Iphone, Paperclip } from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
.left-el-menu-vertical {
  width: 280px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
