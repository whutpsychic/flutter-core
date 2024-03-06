<template>
  <main class="doc-content">
    <h1>getSafeHeight 获取安全高度</h1>
    <h3>{{ "Promise<number[]>" }}</h3>
    <h3>{{ "fc.getSafeHeight()" }}</h3>
    <p>调用此方法查询设备的安全高度。返回结果是一个长度为2的数组。[top, bottom]</p>
    <p>如果您的设备屏幕是标准矩形，结果会返回 [0, 0]。</p>
    <p>【注释】安全高度：为刘海屏、水滴屏、圆角屏等设备而准备。在上述情况下，设备的显示屏为不规则矩形，显示时间、电量、信号等状态信息处于一种“顶部溢出”的状态。这些空间所占用的高度被称为安全高度。</p>
    <p>如果 App 页面内容在排除状态信息的范围中渲染，则认为是安全模式（确保全部内容都在可见视野范围内）。反之如果在全屏范围内渲染 App 内容，则认为是沉浸式。</p>
    <p>安全模式的优点是可以确保全部内容在可见视野范围内。缺点是渲染屏幕较小，是用户觉得紧凑。</p>
    <p>沉浸式的优点是渲染范围更宽大，更舒适。</p>
    <p>在沉浸式条件下，有些内容则可能会被水滴、刘海、圆角遮盖，状态信息也会跟某些内容重叠，导致显示不全、不清晰、交互困难甚至不能。此时根据安全高度设置 padding 或者 margin
      则可以有效规避这些问题，给用户带来更好的使用体验。</p>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="typescript" :code="jscode" />
  </main>
</template>

<script lang="ts" setup>

const jscode: string = `import { fc } from 'flutter-core';

fc.getSafeHeight().then((res: number[]) => {
  alert(JSON.stringify(res))
})`;

</script>

<style lang="scss" scoped></style>
