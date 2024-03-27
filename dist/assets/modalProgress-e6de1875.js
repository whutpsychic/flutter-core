import{d as t,c as n,a as o,t as s,b as c,r,o as a}from"./index-14282f2d.js";const l={class:"doc-content"},d=o("h1",null,"modalProgress 模态进度条",-1),i=o("h3",null,s("Promise<void>"),-1),m=o("p",{class:"args"},"content: 进度文案。",-1),_=o("p",null,"这里是一个进度条提示，位于整个页面的最上层，用于向用户表达任务进程。",-1),g=o("p",null,"fc.modalProgressAdd 是在进度条框展示后，给条添加进度的方法，累计值最大为1，即大于等于1后，进度条便会加满。",-1),h=o("h5",null,s(`
      <script lang="ts" /> `),-1),p=`import { fc } from 'flutter-core';

fc.modalProgress('正在处理...');

setTimeout(() => {
  fc.modalProgressAdd(0.1);
}, 500)

setTimeout(() => {
  fc.modalProgressAdd(0.4);
}, 1000)

setTimeout(() => {
  fc.modalProgressSet(1);
}, 2000)

setTimeout(() => {
  fc.done();
}, 3000)`,j=t({__name:"modalProgress",setup(u){return(f,P)=>{const e=r("highlightjs");return a(),n("main",l,[d,i,o("h3",null,s("fc.modalProgress(content: string)"),1),m,_,g,h,c(e,{language:"typescript",code:p})])}}});export{j as default};
