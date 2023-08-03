<template>
  <main>
    <h1>表单</h1>
    <p>{{ "这是一个基于 vant 当中表单项的二次开发组件。将常用的表单项进行了二次封装，保证了风格的统一性。" }}</p>
    <h2>Attributes</h2>
    <el-table :data="attrs" style="width: 100%">
      <el-table-column prop="name" label="属性名" width="180" />
      <el-table-column prop="description" label="说明" width="240" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="values" label="可选值" />
      <el-table-column prop="defaultValue" label="默认值" />
    </el-table>
    <div style="height:30px;" />
    <h2>items configure</h2>
    <el-table :data="config" style="width: 100%">
      <el-table-column prop="name" label="属性名" width="180" />
      <el-table-column prop="description" label="说明" width="240" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="values" label="可选值" />
      <el-table-column prop="defaultValue" label="默认值" />
    </el-table>
    <h3>items 可选值参考</h3>
    <el-table :data="config2" style="width: 100%">
      <el-table-column prop="col1" label=" " width="120" />
      <el-table-column prop="col2" label="mode: String" />
      <el-table-column prop="col3" label="min: String | Object"  width="160" />
      <el-table-column prop="col4" label="max: String | Object"  width="160" />
      <el-table-column prop="col5" label="options: Array" />
      <el-table-column prop="col6" label="render: Function" />
      <el-table-column prop="col7" label="formatter: String" />
    </el-table>
    <p>表格中未列出的项即为通用属性</p>
  </main>
</template>

<script setup>
const attrs = [
  {
    name: 'v-model:value',
    description: '双向绑定的表单值',
    type: 'Object',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'items',
    description: '当中包含的表单项',
    type: 'Array',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'rules',
    description: '表单项对应的规则（包含是否为必填项，校验规则等）',
    type: 'Array',
    values: ' — ',
    defaultValue: ' — ',
  },
]

const config = [
  {
    name: 'label',
    description: '标签名',
    type: 'String',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'field',
    description: '条目字段名',
    type: 'String',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'type',
    description: '条目类型',
    type: 'String',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'mode',
    description: '某些条目类型的模式',
    type: 'String',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'placeholder',
    description: '条目无值时的提示文字',
    type: 'String',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'min',
    description: '值为范围时的最小值',
    type: 'String | Object',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'max',
    description: '值为范围时的最大值',
    type: 'String | Object',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'options',
    description: '选项器填充选项值时用的属性',
    type: 'Array',
    values: ' — ',
    defaultValue: ' — ',
  },
  {
    name: 'render',
    description: '条目显示文字的自定义方式',
    type: 'Function',
    values: ' — ',
    defaultValue: ' — ',
  },
]

const config2 = [
  { col1: 'text-field', col2: 'password / digit / number / textarea', col3: ' — ', col4: ' — ', col5: ' — ', col6: ' — ', col7: ' — ' },
  { col1: 'id-number', col2: ' — ', col3: ' — ', col4: ' — ', col5: ' — ', col6: ' — ', col7: ' — ' },
  { col1: 'datepicker', col2: '- / year / month / year-month / month-day', col3: 'Date', col4: 'Date', col5: ' — ', col6: ' — ', col7: '参考 momentjs' },
  { col1: 'timepicker', col2: ' — ', col3: 'xx:xx:xx', col4: 'xx:xx:xx', col5: ' — ', col6: ' — ', col7: '参考 momentjs' },
  { col1: 'picker', col2: ' — ', col3: ' — ', col4: ' — ', col5: '[{ text:xxxx, value:xxxx }]', col6: ' — ', col7: ' — ' },
  { col1: 'calendar', col2: '- / multiple / range', col3: ' — ', col4: ' — ', col5: ' — ', col6: 'Fn', col7: ' — ' },
  { col1: 'cascader', col2: ' — ', col3: ' — ', col4: ' — ', col5: '[{ text:xxxx, value:xxxx, children:[...] }]', col6: ' — ', col7: ' — ' },
  { col1: 'steper', col2: ' — ', col3: ' — ', col4: ' — ', col5: ' — ', col6: ' — ', col7: ' — ' },
  { col1: 'radio',  col2: ' — ', col3: ' — ', col4: ' — ', col5: '[{ label:xxxx, value:xxxx }]', col6: ' — ', col7: ' — '},
  { col1: 'area', col2: ' — ', col3: ' — ', col4: ' — ', col5: ' — ', col6: ' — ', col7: ' — ' },
]
</script>

<style lang="scss" scoped></style>
