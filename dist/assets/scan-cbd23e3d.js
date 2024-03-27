import{d as n,c as o,a as t,t as e,b as c,r as l,o as a}from"./index-14282f2d.js";const r={class:"doc-content"},i=t("h1",null,"scan 混合扫描",-1),_=t("h3",null,e("Promise<string>"),-1),h=t("p",null,"调用此方法会通知 App 跳转至扫描页进行扫描操作。",-1),p=t("p",null,"扫描操作完成后会带着扫描结果返回跳出前的页面。您可以在.then中获取扫码结果。当然，您也可以使用 fc.done() 提前结束操作。",-1),d=t("p",null,"【注意】此方法可兼顾识别二维码和条形码。相对地，性能会略低于其他单种类扫描。",-1),u=t("p",null,"【注意】像这种需要借助设备硬件的功能（通常含有原生的页面跳转），结束后不要立即在.then方法中调用类似 alert() 这种会使程序暂停等待的函数，否则会无法正常运行，甚至丢失返回结果。如果场景需要，请至少等待300ms后再调用此类方法。",-1),m=t("h5",null,e(`
      <script lang="ts" /> `),-1),f=`import { fc } from 'flutter-core';

fc.scan().then((res: string) => {
  setTimeout(() => {
    alert(res)
  }, 300)
  if (typeof res === 'string') {
    // ...
  }
  else {
    // '没有拿到结果';
  }
})`,k=n({__name:"scan",setup(g){return(j,y)=>{const s=l("highlightjs");return a(),o("main",r,[i,_,t("h3",null,e("fc.scan()"),1),h,p,d,u,m,c(s,{language:"typescript",code:f})])}}});export{k as default};
