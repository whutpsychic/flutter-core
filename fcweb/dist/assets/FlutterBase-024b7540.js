import{_ as i,f as a,o as r,c as d,a as e,w as l,b as s}from"./index-a12f404c.js";import{B as m}from"./index-1ab5511c.js";const n={mounted(){a.await("modalTips",c=>{a.toast(c)}),a.await("modalConfirm",c=>{a.toast(c)}),a.await("readLocal",c=>{a.toast(c)})},unmounted(){a.uninstall("modalTips"),a.uninstall("modalConfirm")},methods:{toast(){a.toast("这是一则短提示消息！")},modalTips(){a.modalTips("标题","这是一则重要提示！")},modalConfirm(){a.modalConfirm("标题","您确定要这样做吗？")},modalLoading(){a.modalLoading("加载中..."),setTimeout(()=>{a.done()},3e3)},modalProgress(){a.modalProgress("正在处理..."),setTimeout(()=>{a.modalProgressAdd(.2)},1e3),setTimeout(()=>{a.modalProgressAdd(.2)},2e3),setTimeout(()=>{a.modalProgressAdd(.2)},3e3),setTimeout(()=>{a.modalProgressAdd(.2)},4e3),setTimeout(()=>{a.modalProgressAdd(.2)},5e3),setTimeout(()=>{a.done()},6e3)},writeLocalData(){a.recordLocal("hell","xxxxx")},readLocalData(){a.readLocal("hell")},ipconfig(){a.ipconfig()}}};function u(c,_,p,f,k,o){const t=m;return r(),d("main",null,[e(t,{class:"btn-item",type:"primary",block:"",onClick:o.toast},{default:l(()=>[s("Toast 短提示")]),_:1},8,["onClick"]),e(t,{class:"btn-item",type:"primary",block:"",onClick:o.modalTips},{default:l(()=>[s("模态提示")]),_:1},8,["onClick"]),e(t,{class:"btn-item",type:"primary",block:"",onClick:o.modalConfirm},{default:l(()=>[s("模态确认询问")]),_:1},8,["onClick"]),e(t,{class:"btn-item",type:"primary",block:"",onClick:o.modalLoading},{default:l(()=>[s("模态加载中")]),_:1},8,["onClick"]),e(t,{class:"btn-item",type:"primary",block:"",onClick:o.modalProgress},{default:l(()=>[s("模态进度条")]),_:1},8,["onClick"]),e(t,{class:"btn-item",type:"primary",block:"",onClick:o.writeLocalData},{default:l(()=>[s("写入本地缓存数据")]),_:1},8,["onClick"]),e(t,{class:"btn-item",type:"primary",block:"",onClick:o.readLocalData},{default:l(()=>[s("读取本地缓存数据")]),_:1},8,["onClick"]),e(t,{class:"btn-item",type:"primary",block:"",onClick:o.ipconfig},{default:l(()=>[s("ip 设置")]),_:1},8,["onClick"])])}const y=i(n,[["render",u],["__scopeId","data-v-74c8f5a8"]]);export{y as default};
