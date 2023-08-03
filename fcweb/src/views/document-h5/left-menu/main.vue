<template>
  <el-menu class="left-el-menu-vertical" router default-active="/h5/doc/preview">
    <el-menu-item-group title="概览">
      <el-menu-item index="/h5/doc/preview">框架概述</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="组件">
      <el-menu-item index="/h5/doc/app-container">App 最外层容器</el-menu-item>
      <el-menu-item index="/h5/doc/pullable-list">下拉刷新列表</el-menu-item>
      <el-menu-item index="/h5/doc/top-searcher">顶部搜索条</el-menu-item>
      <el-menu-item index="/h5/doc/form">表单项</el-menu-item>
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
