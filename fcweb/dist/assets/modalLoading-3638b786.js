import{ae as l,o as s,c as d,a as o,t,d as e}from"./index-078305d3.js";const i=o("h1",null,"ModalLoading 模态加载中",-1),_=o("p",null,"这里是一个加载中的提示，位于整个页面的最上层。",-1),m=o("h3",null,t("<template />"),-1),g=o("h3",null,t("<script />"),-1),f={__name:"modalLoading",setup(r){const a='<button @click="modalLoading">模态确认询问</button>',c=`// 显示加载中，3秒后关闭
const modalLoading = () => {
  fc.modalLoading("加载中...");
  setTimeout(() => { fc.done() }, 3000);
};`;return(h,u)=>{const n=l("highlightjs");return s(),d("main",null,[i,o("h2",null,t("fc.modalLoading(<String> content)"),1),_,m,e(n,{language:"xml",code:a}),g,e(n,{language:"javascript",code:c})])}}};export{f as default};
