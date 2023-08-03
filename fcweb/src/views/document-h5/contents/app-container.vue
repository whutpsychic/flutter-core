<template>
  <main>
    <h1>App 最外层容器</h1>
    <p>{{ "原则上请一定要使用此组件，除非你开发的页面外观特殊。" }}</p>
    <p>{{ "此组件内部包含了一个二次封装过的 <van-nav-bar /> 组件，你只需要简单地配置一下即可使用。" }}</p>
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
    <h2>Slots</h2>
    <el-table :data="slots" style="width: 100%">
      <el-table-column prop="name" label="插槽名" width="180" />
      <el-table-column prop="description" label="说明" />
    </el-table>
  </main>
</template>

<script setup>
const attrs = [
  {
    name: 'title',
    description: '页头标题',
    type: 'String',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'canPop',
    description: '是否显示页头左侧的后退按钮，如果展示的话，点击则是默认的后退动作',
    type: 'Boolean',
    values: ' — ',
    defaultValue: 'false',
  },
  {
    name: 'moreActions',
    description: '是否显示页头右侧的“更多操作”按钮，你可以通过配置数组中的内容来决定都有哪些操作',
    type: 'Array',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'backFn',
    description: '（仅在canPop = true时有意义）如果你需要拦截并自定义后退动作，那么你可以用此函数来替代',
    type: 'Function',
    values: ' — ',
    defaultValue: ' — ',
  },
]

const events = [
  {
    name: 'action',
    description: '当定义了顶部条“更多操作”后，点击当中的一条时触发',
    args: 'text, index',
  },
]

const slots = [
  {
    name: ' - ',
    description: '如果你想要使用此组件的顶部条，但是又不想使用 #body 插槽的默认嵌套样式，则可以使用此插槽',
  },
  {
    name: 'title',
    description: '用于替代顶部文字标题',
  },
  {
    name: 'top-right',
    description: '如果你需要在右上方添加特殊物件，可使用此插槽',
  },
  {
    name: 'body',
    description: '用于插入主要内容',
  },
]

</script>

<style lang="scss" scoped></style>
