import{ae as l,o as r,c as i,a as e,t as a,d as s}from"./index-4804161f.js";const p=e("h1",null,"请求照相机 / 摄像机权限",-1),u=e("p",null,"调用此方法通知 flutter 向设备请求相关权限。",-1),_=e("h3",null,a("<template />"),-1),d=e("h3",null,a("<script />"),-1),m=e("p",null,"同样地，您需要注册事后监听函数",-1),x={__name:"camera",setup(f){const o='<button @click="getCamera">请求照相机/摄像头权限</button>',c=`const getCamera = () => {
  fp.request("camera");
}`,n=`// 注册权限请求之后的动作函数
fp.await("camera", (res) => {
  if (res === fp.status.denied) {
    fc.toast("需要申请")
  } else if (res === fp.status.permanentlyDenied) {
    fc.toast("您申请的权限已被禁止，您需要在系统设置中设置此应用的权限")
  }
  else if (res === fp.status.granted) {
    fc.toast("您申请的权限已获批准")
  }
});`;return(h,g)=>{const t=l("highlightjs");return r(),i("main",null,[p,e("h2",null,a('fp.request("camera")'),1),u,_,s(t,{language:"xml",code:o}),d,s(t,{language:"javascript",code:c}),m,s(t,{language:"javascript",code:n})])}}};export{x as default};
