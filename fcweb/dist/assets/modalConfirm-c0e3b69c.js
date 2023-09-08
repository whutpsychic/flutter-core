import{ae as l,o as i,c as r,a as o,t as n,d as e}from"./index-4804161f.js";const m=o("h1",null,"ModalConfirm 模态确定询问",-1),d=o("p",null,"这里是调用各平台的原生模态提示的方法，这是一种高仿真的视觉组件，调用的是 flutter 视觉组件，而并不是真实的原生平台组件。",-1),_=o("h3",null,n("<template />"),-1),u=o("h3",null,n("<script />"),-1),h=o("p",null,"如果您需要在模态提示时暂停任务，并在用户点击“确定 / 取消”之后继续任务，那么您可以在 mounted 或者 created 处注册监听返回的函数。后续的任务可以在回调函数中进行。",-1),j={__name:"modalConfirm",setup(f){const a='<button @click="modalConfirm">模态确认询问</button>',c=`const modalConfirm = () => {
  fc.modalConfirm("标题", "您确定要这样做吗？");
};`,s=`// 如果需要在提示时暂停并且等待回馈，那么需要注册此函数
fc.await("modalConfirm", (res) => {
  fc.toast(res);
});`;return(p,g)=>{const t=l("highlightjs");return i(),r("main",null,[m,o("h2",null,n("fc.modalConfirm(<String> title, <String> content)"),1),d,_,e(t,{language:"xml",code:a}),u,e(t,{language:"javascript",code:c}),h,e(t,{language:"javascript",code:s})])}}};export{j as default};
