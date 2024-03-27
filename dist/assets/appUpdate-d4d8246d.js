import{d as p,c as s,a as t,t as e,b as n,r as a,o as c}from"./index-14282f2d.js";const l={class:"doc-content"},i=t("h1",null,"appUpdate App 更新",-1),r=t("h3",null,e("Promise<void>"),-1),_=t("p",{class:"args"},"url: Android端新apk下载地址; filename: 下载至本地后的文件命名。",-1),d=t("p",null,"App 更新方法。",-1),h=t("p",null,"在 Android 环境下，调用此方法会跳转至 url 地址下载安装新的 App。",-1),u=t("p",null,"在 iOS 环境下，调用此方法会唤起至 AppStore 软件，并使之跳转至下载此 App 的页面。注意：在 iOS 环境下，参数 url、filename 没有任何作用。跳转至下载此 App 的地址页是在 App 内部固定的。",-1),m=t("h5",null,e(`
      <script lang="ts" /> `),-1),f=`import { fc } from 'flutter-core';

fc.appUpdate("http://nxbhyt.cn:8280/exam/app/bhyt.apk","bhyt");`,k=p({__name:"appUpdate",setup(g){return(A,y)=>{const o=a("highlightjs");return c(),s("main",l,[i,r,t("h3",null,e("fc.appUpdate(url: string, filename: string)"),1),_,d,h,u,m,n(o,{language:"typescript",code:f})])}}});export{k as default};