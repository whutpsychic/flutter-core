<template>
  <main>
    <h1>可下拉刷新的列表</h1>
    <p>{{ "这是一个基于 vant4 中 <van-pull-refresh /> 和 <van-list /> 的二次开发组件。" }}</p>
    <h2>Attributes</h2>
    <el-table :data="attrs" style="width: 100%">
      <el-table-column prop="name" label="属性名" width="180" />
      <el-table-column prop="description" label="说明" width="240" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="values" label="可选值" />
      <el-table-column prop="defaultValue" label="默认值" />
    </el-table>
    <div style="height:30px;" />
    <h2>Events</h2>
    <el-table :data="events" style="width: 100%">
      <el-table-column prop="name" label="事件名" width="180" />
      <el-table-column prop="description" label="说明" width="400" />
      <el-table-column prop="args" label="回调参数" />
    </el-table>
    <div style="height:30px;" />
    <h2>Methods</h2>
    <el-table :data="methods" style="width: 100%">
      <el-table-column prop="name" label="方法名" width="180" />
      <el-table-column prop="description" label="说明" width="400" />
      <el-table-column prop="args" label="回调参数" />
    </el-table>
  </main>
</template>

<script setup>
const attrs = [
  {
    name: 'load',
    description: '加载函数，初始和加载更多时调用，要求是一个异步函数(async 或 Promise)',
    type: 'Function',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'doubleCol',
    description: '两列式展示项',
    type: 'Boolean',
    values: ' — ',
    defaultValue: 'false',
  },
]

const events = [
  {
    name: 'refresh',
    description: '初始化加载、重新加载时会触发此事件',
    args: ' — ',
  },
]

const methods = [
  {
    name: 'finish',
    description: '列表加载结束，结束后将不会再触发加载更多事件，并在底部提示已经没有更多数据',
    args: ' — ',
  },
]

</script>

<style lang="scss" scoped></style>
