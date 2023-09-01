import{ae as l,o as d,c as r,a as e,t,d as o}from"./index-40740f4b.js";const _=e("h1",null,"scanBarcode 扫描条形码",-1),i=e("p",null,"调用此方法会通知 App 跳转至扫描页进行扫描操作。",-1),p=e("p",null,"扫描操作完成后会带着扫描结果返回跳出前的页面。当然，您也可以使用 fc.done() 提前结束操作。",-1),u=e("p",null,"注意：此方法只能扫描条形码，不能扫描二维码。相对地，性能会略高于混合扫描。",-1),h=e("h3",null,t("<template />"),-1),m=e("h3",null,t("<script />"),-1),g=e("p",null,"扫描结束后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。",-1),k={__name:"scanBarcode",setup(B){const s='<button @click="scanBarcode">扫描条形码</button>',n=`const scanBarcode = () => {
  fc.scanBarcode();
};`,a=`// 扫码结果
fc.await("scanner", (res) => {
  fc.toast(res);
});`;return(f,j)=>{const c=l("highlightjs");return d(),r("main",null,[_,e("h2",null,t("fc.scanBarcode()"),1),i,p,u,h,o(c,{language:"xml",code:s}),m,o(c,{language:"javascript",code:n}),g,o(c,{language:"javascript",code:a})])}}};export{k as default};
