import{d as s,c,a as e,t,b as n,r as a,o as r}from"./index-14282f2d.js";const l={class:"doc-content"},i=e("h1",null,"readLocal 读取本地缓存数据",-1),_=e("h3",null,t("Promise<string>"),-1),d=e("p",{class:"args"},"key: 要读取的缓存键。",-1),h=e("p",null,"读取本地缓存数据，调用此方法会读取调用 fc.recordLocal(k, v) 存储的本地缓存数据。然后您可以在.then中得到读取的缓存数据。",-1),p=e("h5",null,t(`
      <script lang="ts" /> `),-1),g=`import { fc } from 'flutter-core';

fc.readLocal('keystr').then((res: string | null) => {
  fc.toast(\`\${res}\`);
})`,y=s({__name:"readLocal",setup(m){return(u,f)=>{const o=a("highlightjs");return r(),c("main",l,[i,_,e("h3",null,t("fc.readLocal(key: string)"),1),d,h,p,n(o,{language:"typescript",code:g})])}}});export{y as default};
