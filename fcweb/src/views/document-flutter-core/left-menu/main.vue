<template>
  <el-menu class="left-el-menu-vertical" router default-active="/flutter-core/doc/preview">
    <el-menu-item-group title="概览">
      <el-menu-item index="/flutter-core/doc/preview">概述</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="原生功能">
      <el-menu-item index="/flutter-core/doc/toast">Toast 短提示</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="设备功能">
    </el-menu-item-group>
    <el-menu-item-group title="权限请求">
    </el-menu-item-group>
  </el-menu>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.left-el-menu-vertical {
  width: 240px;
}
</style>
