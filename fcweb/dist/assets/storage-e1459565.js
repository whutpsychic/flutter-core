import{ae as l,o as r,c as i,a as t,t as o,d as s}from"./index-40740f4b.js";const p=t("h1",null,"请求读写数据权限",-1),u=t("p",null,"调用此方法通知 flutter 向设备请求相关权限。",-1),g=t("h3",null,o("<template />"),-1),_=t("h3",null,o("<script />"),-1),d=t("p",null,"同样地，您需要注册事后监听函数",-1),x={__name:"storage",setup(f){const a='<button @click="getStorage">请求读写数据权限</button>',n=`const getStorage = () => {
  fp.request("storage");
}`,c=`// 注册权限请求之后的动作函数
fp.await("storage", (res) => {
  if (res === fp.status.denied) {
    fc.toast("需要申请")
  } else if (res === fp.status.permanentlyDenied) {
    fc.toast("您申请的权限已被禁止，您需要在系统设置中设置此应用的权限")
  }
  else if (res === fp.status.granted) {
    fc.toast("您申请的权限已获批准")
  }
});`;return(h,m)=>{const e=l("highlightjs");return r(),i("main",null,[p,t("h2",null,o('fp.request("storage")'),1),u,g,s(e,{language:"xml",code:a}),_,s(e,{language:"javascript",code:n}),d,s(e,{language:"javascript",code:c})])}}};export{x as default};
