import{ae as l,o as r,c as p,a as e,t as o,d as c}from"./index-fe73f579.js";const h=e("h1",null,"checkNetworkType 检查网络连接类型",-1),i=e("p",null,"调用此方法会通知 App 检查当前接入网络连接的类型，主要用于识别是 4g / 5g 或者 wifi。",-1),_=e("h3",null,o("<template />"),-1),d=e("h3",null,o("<script />"),-1),k=e("p",null,"检查成功后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。",-1),N={__name:"checkNetworkType",setup(u){const s='<button @click="checkNetworkType">检查网络连接类型</button>',n=`const checkNetworkType = () => {
  fc.checkNetworkType();
};`,a=`// 等待网络类型检查结果
fc.await("checkNetworkType", (res) => {
  fc.toast(res);
});`;return(g,m)=>{const t=l("highlightjs");return r(),p("main",null,[h,e("h2",null,o("fc.checkNetworkType()"),1),i,_,c(t,{language:"xml",code:s}),d,c(t,{language:"javascript",code:n}),k,c(t,{language:"javascript",code:a})])}}};export{N as default};
