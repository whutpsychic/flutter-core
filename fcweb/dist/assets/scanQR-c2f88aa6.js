import{ae as l,o as _,c as i,a as t,t as n,d as e}from"./index-4804161f.js";const d=t("h1",null,"scanQR 扫描二维码",-1),r=t("p",null,"调用此方法会通知 App 跳转至扫描页进行扫描操作。",-1),p=t("p",null,"扫描操作完成后会带着扫描结果返回跳出前的页面。当然，您也可以使用 fc.done() 提前结束操作。",-1),u=t("p",null,"注意：此方法只能扫描二维码，不能扫描条形码。相对地，性能会略高于混合扫描。",-1),h=t("h3",null,n("<template />"),-1),m=t("h3",null,n("<script />"),-1),g=t("p",null,"扫描结束后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。",-1),x={__name:"scanQR",setup(f){const c='<button @click="scanQR">扫描二维码</button>',o=`const scanQR = () => {
  fc.scanQR();
};`,a=`// 扫码结果
fc.await("scanner", (res) => {
  fc.toast(res);
});`;return(j,Q)=>{const s=l("highlightjs");return _(),i("main",null,[d,t("h2",null,n("fc.scanQR()"),1),r,p,u,h,e(s,{language:"xml",code:c}),m,e(s,{language:"javascript",code:o}),g,e(s,{language:"javascript",code:a})])}}};export{x as default};
