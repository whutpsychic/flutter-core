import{ae as a,o as s,c as n,a as e,t as o,d as l}from"./index-40740f4b.js";const r=e("h1",null,"recordLocal 写入本地缓存数据",-1),i=e("p",null,"这是一个写入本地缓存数据的方法，调用此方法写入的本地缓存数据是长期有效的，不会因刷新页面、重新打开app或者开关手机等操作而丢失。如果重复写入，则会覆盖之前的内容。",-1),_=e("p",null,"调用此方法写入的本地缓存数据只能由 fc.readLocal(key) 读出。",-1),d=e("h3",null,o("<script />"),-1),m={__name:"recordLocal",setup(p){const c='fc.recordLocal("id", "xxxxx");';return(h,u)=>{const t=a("highlightjs");return s(),n("main",null,[r,e("h2",null,o("fc.recordLocal(<String> key, <String> value)"),1),i,_,d,l(t,{language:"javascript",code:c})])}}};export{m as default};
