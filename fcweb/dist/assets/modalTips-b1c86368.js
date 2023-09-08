import{ae as n,o as i,c as d,a as t,t as e,d as s}from"./index-fe73f579.js";const p=t("h1",null,"ModalTips 模态提示",-1),r=t("p",null,"这里是调用各平台的原生模态提示的方法，这是一种高仿真的视觉组件，调用的是 flutter 视觉组件，而并不是真实的原生平台组件。",-1),_=t("h3",null,e("<template />"),-1),m=t("h3",null,e("<script />"),-1),u=t("p",null,"如果您需要在模态提示时暂停任务，并在用户点击“确定 / 好”之后继续任务，那么您可以在 mounted 或者 created 处注册监听返回的函数。后续的任务可以在回调函数中进行。",-1),j={__name:"modalTips",setup(h){const a='<button @click="modalTips">模态提示</button>',c=`const modalTips = () => {
  fc.modalTips("标题", "这是一则重要提示！");
};`,l=`// 如果需要在提示时暂停并且等待回馈，那么需要注册此函数
fc.await("modalTips", (res) => {
  fc.toast(res);
});`;return(g,f)=>{const o=n("highlightjs");return i(),d("main",null,[p,t("h2",null,e("fc.modalTips(<String> msg)"),1),r,_,s(o,{language:"xml",code:a}),m,s(o,{language:"javascript",code:c}),u,s(o,{language:"javascript",code:l})])}}};export{j as default};
