import{d as o,c as s,a as t,t as e,b as c,r,o as l}from"./index-14282f2d.js";const a={class:"doc-content"},h=t("h1",null,"launchInnerExplorer 内置浏览器打开某网页",-1),p=t("h3",null,e("Promise<void>"),-1),_=t("p",{class:"args"},"url: 网页地址。",-1),i=t("p",null,"调用此方法会在App内部打开一个浏览器，然后访问某页面。",-1),u=t("p",null,"【注意】如果您调用此接口打开浏览器，地址参数需要以http/https开头，否则会操作失败。",-1),d=t("h5",null,e(`
      <script lang="ts" /> `),-1),m=`import { fc } from 'flutter-core';

fc.launchInnerExplorer("https://www.tencent.com/zh-cn/");`,I=o({__name:"launchInnerExplorer",setup(g){return(f,x)=>{const n=r("highlightjs");return l(),s("main",a,[h,p,t("h3",null,e("fc.launchInnerExplorer(url: string)"),1),_,i,u,d,c(n,{language:"typescript",code:m})])}}});export{I as default};
