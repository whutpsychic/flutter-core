import{ae as n,o as r,c as d,a as e,t,d as o}from"./index-40740f4b.js";const i=e("h1",null,"readLocal 读取本地缓存数据",-1),_=e("p",null,"读取本地缓存数据，调用此方法会读取调用 fc.recordLocal(k, v) 存储的本地缓存数据。",-1),u=e("h3",null,t("<template />"),-1),h=e("h3",null,t("<script />"),-1),p=e("p",null,"在读取到数据之后进行某些操作时，您需要在 mounted 或者 created 处注册监听返回的函数。后续的任务可以在回调函数中进行。",-1),j={__name:"readLocal",setup(g){const c='<button @click="readLocalData">读取缓存数据</button>',s=`const readLocalData = () => {
  fc.readLocal("id");
};`,l=`// 读取数据
fc.await("readLocal", (res) => {
  fc.toast(res);
});`;return(m,f)=>{const a=n("highlightjs");return r(),d("main",null,[i,e("h2",null,t("fc.recordLocal(<String> key, <String> value)"),1),_,u,o(a,{language:"xml",code:c}),h,o(a,{language:"javascript",code:s}),p,o(a,{language:"javascript",code:l})])}}};export{j as default};
