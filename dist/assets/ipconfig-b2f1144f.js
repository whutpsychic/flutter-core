import{d as n,c as s,a as o,t,b as c,r as i,o as p}from"./index-14282f2d.js";const l={class:"doc-content"},a=o("h1",null,"ipConfig IP地址配置页",-1),_=o("h3",null,t("Promise<void>"),-1),r=o("p",null,"跳转至 App 的 ip 地址配置页，配置的ip地址将会决定 App 显示的是什么内容。",-1),h=o("p",null,"在调试模式下，App 监听了“摇一摇”动作，会询问用户是否要跳转至ip配置页。产品模式下没有此功能。但是无论在哪种模式下，您都可以通过调用此接口使 App 跳转至该页面。",-1),d=o("h5",null,t(`
      <script lang="ts" /> `),-1),f=`import { fc } from 'flutter-core';

fc.ipConfig();`,A=n({__name:"ipconfig",setup(g){return(m,u)=>{const e=i("highlightjs");return p(),s("main",l,[a,_,o("h3",null,t("fc.ipConfig()"),1),r,h,d,c(e,{language:"typescript",code:f})])}}});export{A as default};
