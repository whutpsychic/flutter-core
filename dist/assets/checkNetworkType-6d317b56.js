import{d,e as h,c as m,a as o,t as s,b as t,w as l,f as _,r as v,o as f}from"./index-4e668130.js";import{E as y,a as g,b as k}from"./el-input-9c7c7c66.js";const w={class:"doc-content"},N=o("h1",null,"checkNetworkType 检查网络连接类型",-1),V=o("h3",null,s("Promise<string>"),-1),C=_('<p>调用此方法会通知 App 检查当前接入网络连接的类型，主要用于识别是移动网 / wifi 或者断网状态。您可以在.then方法里查看状态信息。</p><p>请求权限后可能得到的字符串结果如下：</p><p class="args">ConnectivityResult.bluetooth 蓝牙</p><p class="args">ConnectivityResult.wifi WIFI</p><p class="args">ConnectivityResult.ethernet 以太网</p><p class="args">ConnectivityResult.mobile 移动蜂窝数据</p><p class="args">ConnectivityResult.vpn VPN( Android only )</p><p class="args">ConnectivityResult.other 未知类型 / iOS 使用VPN时</p>',8),b=o("h5",null,s(`
      <script lang="ts" /> `),-1),a=`/// Bluetooth: Device connected via bluetooth
  bluetooth,

  /// WiFi: Device connected via Wi-Fi
  wifi,

  /// Ethernet: Device connected to ethernet network
  ethernet,

  /// Mobile: Device connected to cellular network
  mobile,

  /// None: Device not connected to any network
  none,

  /// VPN: Device connected to a VPN
  ///
  /// Note for iOS and macOS:
  /// There is no separate network interface type for [vpn].
  /// It returns [other] on any device (also simulator).
  vpn,

  /// Other: Device is connected to an unknown network
  other`,D=`import { fc } from 'flutter-core';

fc.checkNetworkType().then((res: string) => {
  alert(res)
});`,P=d({__name:"checkNetworkType",setup(E){const c=h(!0);return(R,e)=>{const i=g,r=k,p=y,u=v("highlightjs");return f(),m("main",w,[N,V,o("h3",null,s("fc.checkNetworkType()"),1),C,t(p,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=n=>c.value=n)},{default:l(()=>[t(r,{title:"点击展开原文描述",name:"1"},{default:l(()=>[t(i,{modelValue:a,"onUpdate:modelValue":e[0]||(e[0]=n=>a=n),disabled:"",autosize:"",type:"textarea"})]),_:1})]),_:1},8,["modelValue"]),b,t(u,{language:"typescript",code:D})])}}});export{P as default};
