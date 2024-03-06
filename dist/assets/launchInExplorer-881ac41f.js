import{d as e,c as n,a as t,t as o,b as c,r as l,o as r}from"./index-4e668130.js";const a={class:"doc-content"},h=t("h1",null,"launchInExplorer 使用手机浏览器打开某网页",-1),i=t("h3",null,o("Promise<void>"),-1),p=t("p",{class:"args"},"url: 网页地址。",-1),_=t("p",null,"调用此方法会唤起手机的默认浏览器，然后访问地址为 url 的页面。",-1),u=t("p",null,"【注意】如果您调用此接口打开浏览器，地址参数需要以http/https开头，否则会操作失败。",-1),d=t("h5",null,o(`
      <script lang="ts" /> `),-1),m=`import { fc } from 'flutter-core';

fc.launchInExplorer("https://www.baidu.com");`,I=e({__name:"launchInExplorer",setup(g){return(f,x)=>{const s=l("highlightjs");return r(),n("main",a,[h,i,t("h3",null,o("fc.launchInExplorer(url: string)"),1),p,_,u,d,c(s,{language:"typescript",code:m})])}}});export{I as default};
