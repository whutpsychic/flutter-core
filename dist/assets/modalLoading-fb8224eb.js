import{d as n,c as s,a as o,t,b as c,r as a,o as i}from"./index-4e668130.js";const l={class:"doc-content"},d=o("h1",null,"modalLoading 模态加载中",-1),r=o("h3",null,t("Promise<void>"),-1),_=o("p",{class:"args"},"content: 提示文案。",-1),h=o("p",null,"这里是一个加载中的提示，位于整个页面的最上层。同样地可以使用 fc.done() 来提前结束进程。",-1),m=o("h5",null,t(`
      <script lang="ts" /> `),-1),p=`import { fc } from 'flutter-core';

// 显示加载中，3秒后关闭
fc.modalLoading("加载中...");
setTimeout(() => { fc.done() }, 3000);
`,j=n({__name:"modalLoading",setup(g){return(u,f)=>{const e=a("highlightjs");return i(),s("main",l,[d,r,o("h3",null,t("fc.modalLoading(content: string)"),1),_,h,m,c(e,{language:"typescript",code:p})])}}});export{j as default};
