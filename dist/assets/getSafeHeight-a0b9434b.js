import{d as s,c as n,a as t,t as e,b as c,r as l,o as i}from"./index-14282f2d.js";const _={class:"doc-content"},a=t("h1",null,"getSafeHeight 获取安全高度",-1),r=t("h3",null,e("Promise<number[]>"),-1),h=t("p",null,"调用此方法查询设备的安全高度。返回结果是一个长度为2的数组。[top, bottom]",-1),p=t("p",null,"如果您的设备屏幕是标准矩形，结果会返回 [0, 0]。",-1),d=t("p",null,"【注释】安全高度：为刘海屏、水滴屏、圆角屏等设备而准备。在上述情况下，设备的显示屏为不规则矩形，显示时间、电量、信号等状态信息处于一种“顶部溢出”的状态。这些空间所占用的高度被称为安全高度。",-1),g=t("p",null,"如果 App 页面内容在排除状态信息的范围中渲染，则认为是安全模式（确保全部内容都在可见视野范围内）。反之如果在全屏范围内渲染 App 内容，则认为是沉浸式。",-1),u=t("p",null,"安全模式的优点是可以确保全部内容在可见视野范围内。缺点是渲染屏幕较小，是用户觉得紧凑。",-1),m=t("p",null,"沉浸式的优点是渲染范围更宽大，更舒适。",-1),f=t("p",null,"在沉浸式条件下，有些内容则可能会被水滴、刘海、圆角遮盖，状态信息也会跟某些内容重叠，导致显示不全、不清晰、交互困难甚至不能。此时根据安全高度设置 padding 或者 margin 则可以有效规避这些问题，给用户带来更好的使用体验。",-1),S=t("h5",null,e(`
      <script lang="ts" /> `),-1),b=`import { fc } from 'flutter-core';

fc.getSafeHeight().then((res: number[]) => {
  alert(JSON.stringify(res))
})`,N=s({__name:"getSafeHeight",setup(H){return(j,y)=>{const o=l("highlightjs");return i(),n("main",_,[a,r,t("h3",null,e("fc.getSafeHeight()"),1),h,p,d,g,u,m,f,S,c(o,{language:"typescript",code:b})])}}});export{N as default};
