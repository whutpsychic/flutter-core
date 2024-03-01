<template>
  <el-menu class="left-el-menu-vertical" default-active="/home/done" router>
    <el-sub-menu index="base">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>基础功能</span>
      </template>
      <el-menu-item index="/home/done">done 通用结束操作</el-menu-item>
      <el-menu-item index="/home/ipconfig">ipconfig IP地址配置</el-menu-item>
      <el-menu-item index="/home/modalTips">ModalTips 模态提示</el-menu-item>
      <el-menu-item index="/home/modalConfirm">ModalConfirm 模态确定询问</el-menu-item>
      <el-menu-item index="/home/modalLoading">ModalLoading 模态加载中</el-menu-item>
      <el-menu-item index="/home/modalProgress">ModalProgress 模态进度条</el-menu-item>
      <el-menu-item index="/home/recordLocal">recordLocal 写入本地缓存数据</el-menu-item>
      <el-menu-item index="/home/readLocal">readLocal 读取本地缓存数据</el-menu-item>
      <el-menu-item index="/home/toast">Toast 短提示</el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

</script>

<style lang="scss" scoped>
.left-el-menu-vertical {
  width: 280px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
