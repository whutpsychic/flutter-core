import{ae as l,o as _,c as i,a as t,t as n,d as e}from"./index-078305d3.js";const d=t("h1",null,"scan 混合扫描",-1),r=t("p",null,"调用此方法会通知 App 跳转至扫描页进行扫描操作。",-1),p=t("p",null,"扫描操作完成后会带着扫描结果返回跳出前的页面。当然，您也可以使用 fc.done() 提前结束操作。",-1),u=t("p",null,"注意：此方法可兼顾识别二维码和条形码。相对地，性能会略低于其他单种类扫描。",-1),h=t("h3",null,n("<template />"),-1),m=t("h3",null,n("<script />"),-1),g=t("p",null,"扫描结束后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。",-1),v={__name:"scan",setup(f){const c='<button @click="scan">混合扫描</button>',o=`const scan = () => {
  fc.scan();
};`,a=`// 扫码结果
fc.await("scanner", (res) => {
  fc.toast(res);
});`;return(j,x)=>{const s=l("highlightjs");return _(),i("main",null,[d,t("h2",null,n("fc.scan()"),1),r,p,u,h,e(s,{language:"xml",code:c}),m,e(s,{language:"javascript",code:o}),g,e(s,{language:"javascript",code:a})])}}};export{v as default};
