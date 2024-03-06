import{d as n,c as s,a as t,t as o,b as c,r as a,o as l}from"./index-4e668130.js";const r={class:"doc-content"},i=t("h1",null,"modalConfirm 模态确定询问",-1),h=t("h3",null,o("Promise<void>"),-1),_=t("p",{class:"args"},"title: 标题; content: 确认文案。",-1),d=t("p",null,"模态确认，这是一种高仿真的 flutter 视觉组件，而并不是真实的原生平台组件。",-1),m=t("p",null,"您可以在.then方法里编写点击确认后的逻辑，.chatch方法里编写点击取消后的逻辑。",-1),p=t("h5",null,o(`
      <script lang="ts" /> `),-1),f=`import { fc } from 'flutter-core';

// 在点确认时进入then，取消时进入catch
fc.modalConfirm('确认标题', '一段文字介绍内容')
  // 确认动作
  .then(() => {
    alert('您选择了确认');
  })
  // 取消动作
  .catch(() => {
    alert('您选择了取消');
  });`,B=n({__name:"modalConfirm",setup(u){return(g,C)=>{const e=a("highlightjs");return l(),s("main",r,[i,h,t("h3",null,o("fc.modalConfirm(title: string, content: string)"),1),_,d,m,p,c(e,{language:"typescript",code:f})])}}});export{B as default};
