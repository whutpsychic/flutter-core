import{d as e,c as n,a as t,t as s,b as c,r as l,o as a}from"./index-14282f2d.js";const i={class:"doc-content"},r=t("h1",null,"modalTips 模态提示",-1),_=t("h3",null,s("Promise<void>"),-1),p=t("p",{class:"args"},"title: 提示标题; msg: 确认文案。",-1),d=t("p",null,"模态提示，这是一种高仿真的 flutter 视觉组件，而并不是真实的原生平台组件。",-1),h=t("p",null,"您可以在.then方法里编写点击确认后的逻辑。",-1),m=t("h5",null,s(`
      <script lang="ts" /> `),-1),g=`import { fc } from 'flutter-core';

fc.modalTips('标题', '内容').then(() => {
  alert('接下来的动作')
});`,B=e({__name:"modalTips",setup(u){return(f,T)=>{const o=l("highlightjs");return a(),n("main",i,[r,_,t("h3",null,s("fc.modalTips(title: string, msg: string)"),1),p,d,h,m,c(o,{language:"typescript",code:g})])}}});export{B as default};
