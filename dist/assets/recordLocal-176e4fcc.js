import{d as t,c,a as e,t as o,b as n,r,o as a}from"./index-4e668130.js";const l={class:"doc-content"},i=e("h1",null,"recordLocal 写入本地缓存数据",-1),_=e("h3",null,o("Promise<boolean>"),-1),d=e("p",{class:"args"},"key: 要写入的缓存键; value: 要写入的缓存数据。",-1),h=e("p",null,"这是一个写入本地缓存数据的方法，调用此方法写入的本地缓存数据是长期有效的，不会因刷新页面、重新打开app或者开关手机等操作而丢失。如果重复写入，则会覆盖之前的内容。",-1),p=e("p",null,"调用此方法写入的本地缓存数据只能由 fc.readLocal(key) 读出。",-1),u=e("h5",null,o(`
      <script lang="ts" /> `),-1),f=`import { fc } from 'flutter-core';

fc.recordLocal('keystr', '这是一段编写好的内容').then((success: boolean) => {
  if (success) {
    alert('写入本地缓存成功');
  }
  return fc.readLocal('keystr');
}).then((res: string | null) => {
  fc.toast(\`\${res}\`);
})`,L=t({__name:"recordLocal",setup(g){return(m,k)=>{const s=r("highlightjs");return a(),c("main",l,[i,_,e("h3",null,o("fc.recordLocal(key: string, value: string)"),1),d,h,p,u,n(s,{language:"typescript",code:f})])}}});export{L as default};
