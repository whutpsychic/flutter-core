import{d as m,e as g,c as _,a as e,t as s,b as t,w as d,f,r as S,o as y}from"./index-4e668130.js";import{E as O,a as v,b as q}from"./el-input-9c7c7c66.js";const P={class:"doc-content"},w=e("h1",null,"权限请求",-1),b=e("h3",null,s("Promise<any>"),-1),V=e("p",null,"调用此方法通知 flutter 向设备请求相关权限。您可以按照下列方式引入fp模块。",-1),T=f('<p>请求权限后可能得到的字符串结果如下：</p><p class="args">PermissionStatus.denied 未经申请，需要向系统申请</p><p class="args">PermissionStatus.granted 允许或本次允许</p><p class="args">PermissionStatus.restricted 设备不允许触碰此规则，需要打开系统设置界面进行设定权限( iOS only )</p><p class="args">PermissionStatus.limited 受限的授权( iOS14+ )</p><p class="args">PermissionStatus.permanentlyDenied 未授权状态，需打开系统设置改变权限</p><p class="args">PermissionStatus.provisional 该应用程序被临时授权发布不中断的用户请求( iOS12+ )</p>',7),C=e("div",{style:{height:"30px"}},null,-1),j=e("h5",null,s(`
      <script lang="ts" /> `),-1),x=e("h5",null,s(`
      <script lang="ts" />`),-1),p=`      /// The user denied access to the requested feature, permission needs to be
      /// asked first.
      denied,

      /// The user granted access to the requested feature.
      granted,

      /// The OS denied access to the requested feature. The user cannot change
      /// this app's status, possibly due to active restrictions such as parental
      /// controls being in place.
      ///
      /// *Only supported on iOS.*
      restricted,

      /// The user has authorized this application for limited access. So far this
      /// is only relevant for the Photo Library picker.
      ///
      /// *Only supported on iOS (iOS14+).*
      limited,

      /// Permission to the requested feature is permanently denied, the permission
      /// dialog will not be shown when requesting this permission. The user may
      /// still change the permission status in the settings.
      ///
      /// *On Android:*
      /// Android 11+ (API 30+): whether the user denied the permission for a second
      /// time.
      /// Below Android 11 (API 30): whether the user denied access to the requested
      /// feature and selected to never again show a request.
      ///
      /// *On iOS:*
      /// If the user has denied access to the requested feature.
      permanentlyDenied,

      /// The application is provisionally authorized to post non-interruptive user
      /// notifications.
      ///
      /// *Only supported on iOS (iOS12+).*
      provisional,`,N=m({__name:"request",setup(A){const i=g(!0),r=l=>`fp.request('${l}').then((res) => {
  alert(JSON.stringify(res))
});`;return(l,o)=>{const n=S("highlightjs"),u=v,c=q,h=O;return y(),_("main",P,[w,b,e("h3",null,s("fp.request(permissionName: string)"),1),V,t(n,{language:"javascript",code:"import { fp } from 'flutter-core';"}),T,t(h,{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value=a)},{default:d(()=>[t(c,{title:"点击展开原文描述",name:"1"},{default:d(()=>[t(u,{modelValue:p,"onUpdate:modelValue":o[0]||(o[0]=a=>p=a),disabled:"",autosize:"",type:"textarea"})]),_:1})]),_:1},8,["modelValue"]),C,e("h3",null,"请求照相机 / 摄像机权限 "+s('fp.request("camera")'),1),j,t(n,{language:"javascript",code:r("camera")},null,8,["code"]),e("h3",null,"请求读写数据权限 "+s('fp.request("storage")'),1),x,t(n,{language:"javascript",code:r("storage")},null,8,["code"])])}}});export{N as default};
