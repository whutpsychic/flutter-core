import{d as n,c as o,a as e,t,b as c,r as l,o as a}from"./index-4e668130.js";const r={class:"doc-content"},i=e("h1",null,"scanQR 扫描二维码",-1),_=e("h3",null,t("Promise<string>"),-1),h=e("p",null,"调用此方法会通知 App 跳转至扫描页进行扫描操作。",-1),p=e("p",null,"扫描操作完成后会带着扫描结果返回跳出前的页面。您可以在.then中获取扫码结果。当然，您也可以使用 fc.done() 提前结束操作。",-1),d=e("p",null,"【注意】此方法只能扫描二维码，不能扫描条形码。相对地，性能会略高于混合扫描。",-1),u=e("p",null,"【注意】像这种需要借助设备硬件的功能（通常含有原生的页面跳转），结束后不要立即在.then方法中调用类似 alert() 这种会使程序暂停等待的函数，否则会无法正常运行，甚至丢失返回结果。如果场景需要，请至少等待300ms后再调用此类方法。",-1),f=e("h5",null,t(`
      <script lang="ts" /> `),-1),m=`import { fc } from 'flutter-core';

fc.scanQR().then((res: string) => {
  setTimeout(() => {
    alert(res)
  }, 300)
  if (typeof res === 'string') {
    info.value = res;
  }
  else {
    info.value = '没有拿到结果';
  }
})`,v=n({__name:"scanQR",setup(g){return(Q,R)=>{const s=l("highlightjs");return a(),o("main",r,[i,_,e("h3",null,t("fc.scanQR()"),1),h,p,d,u,f,c(s,{language:"typescript",code:m})])}}});export{v as default};
