import{d as e,c as n,a as t,t as s,b as c,r as a,o as l}from"./index-4e668130.js";const _={class:"doc-content"},i=t("h1",null,"toast 短提示",-1),r=t("h3",null,s("Promise<void>"),-1),h=t("p",{class:"args"},"msg: 短提示文案。",-1),p=t("p",null,"这里使用的短提示是一种不可配置的，从屏幕底部弹出的最上层弹框，用于提示用户必要信息。",-1),d=t("p",null,"这种短提示是排队任务，如果频繁调用，则会将调用的历史记录全部安排至队列，然后逐一显示。",-1),m=t("h5",null,s(`
      <script lang="ts" /> `),-1),g=`import { fc } from 'flutter-core';

fc.toast("这是一则短提示消息！");`,k=e({__name:"toast",setup(u){return(f,j)=>{const o=a("highlightjs");return l(),n("main",_,[i,r,t("h3",null,s("fc.toast(msg: string)"),1),h,p,d,m,c(o,{language:"typescript",code:g})])}}});export{k as default};
