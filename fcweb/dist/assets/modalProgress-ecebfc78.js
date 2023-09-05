import{ae as c,o as a,c as d,a as o,t as e,d as t}from"./index-078305d3.js";const n=o("h1",null,"ModalProgress 模态进度条",-1),m=o("p",null,"这里是一个进度条提示，位于整个页面的最上层，用于向用户表达任务进程。",-1),i=o("p",null,"fc.modalProgressAdd 是在进度条框展示后，给条添加进度的方法，累计值最大为1，即大于等于1后，进度条便会加满。",-1),g=o("h3",null,e("<template />"),-1),u=o("h3",null,e("<script />"),-1),P={__name:"modalProgress",setup(_){const l='<button @click="modalProgress">模态进度条</button>',r=`//
const modalProgress = () => {
  fc.modalProgress("正在处理...");
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 1000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 2000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 3000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 4000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 5000);
  setTimeout(() => { fc.done() }, 6000);
};`;return(h,p)=>{const s=c("highlightjs");return a(),d("main",null,[n,o("h2",null,e("fc.modalProgress(<String> content)"),1),m,i,g,t(s,{language:"xml",code:l}),u,t(s,{language:"javascript",code:r})])}}};export{P as default};
