<template>
  <main>
    <h1>顶部搜索条</h1>
    <p>{{ "这是一个基于 vant 的二次开发组件，但是大部分代码自开发。" }}</p>
    <h2>Attributes</h2>
    <el-table :data="attrs" style="width: 100%">
      <el-table-column prop="name" label="属性名" width="180" />
      <el-table-column prop="description" label="说明" width="300" />
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
  </main>
</template>

<script setup>
const attrs = [
  {
    name: 'placeholder',
    description: '无内容时显示的提示文字',
    type: 'String',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'predictions',
    description: '预判的将要查找的结果',
    type: 'Array',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'history',
    description: '历史搜索项',
    type: 'Array',
    values: ' — ',
    defaultValue: ' — ',
  },
]

const events = [
  {
    name: 'change',
    description: '当搜索框内的文字改变后触发',
    args: 'text',
  },
  {
    name: 'search',
    description: '当点击搜索时触发',
    args: 'text',
  },
]

</script>

<style lang="scss" scoped></style>
