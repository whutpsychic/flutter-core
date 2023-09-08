import{ae as l,o as h,c as _,a as t,t as s,d as e}from"./index-4804161f.js";const i=t("h1",null,"takePhoto 相机拍照",-1),d=t("p",null,"调用此方法可直接唤起原生相机进行拍照操作，如果没有开启相机权限则会自动询问。",-1),r=t("p",null,"监听的返回数据是一个图片文件的 base64 字符串。",-1),u=t("p",null,"一般情况下拍照和选取相册图片是同时存在的，并不会用到此功能。然而当用户要求必须现场拍照（不允许从相册找寻图片）时，或者其他特殊需求时才会用到此功能。",-1),p=t("h3",null,s("<template />"),-1),m=t("h3",null,s("<script />"),-1),g=t("p",null,"拍完照片后，您需要在 mounted 或者 created 处注册监听返回结果的函数。后续的任务可以在回调函数中进行。",-1),x={__name:"takePhoto",setup(k){const a='<button @click="takePhoto">相机拍照</button>',c=`const takePhoto = () => {
  fc.takePhoto();
};`,n=`// 拍照监听
fc.await("takePhoto", (res) => {
  fc.toast(res);
});`;return(f,P)=>{const o=l("highlightjs");return h(),_("main",null,[i,t("h2",null,s("fc.takePhoto()"),1),d,r,u,p,e(o,{language:"xml",code:a}),m,e(o,{language:"javascript",code:c}),g,e(o,{language:"javascript",code:n})])}}};export{x as default};
