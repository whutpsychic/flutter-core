var d = Object.defineProperty;
var p = (e, a, o) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o;
var t = (e, a, o) => (p(e, typeof a != "symbol" ? a + "" : a, o), o);
class s {
  // static call = async (fnName: string, ...args: unknown[]): Promise<any> => {
  //   console.log(fnName)
  //   return Promise.resolve(fnName);
  // }
}
// 预留的向 flutter 端发送一般信息的默认函数
t(s, "call", async (a, ...o) => {
  if (sessionStorage.getItem("flutterInAppWebViewPlatformReady") === null) {
    console.error(
      "你所在的位置于flutter端没有注册通讯端口函数,请先行注册方可使用,或者联系zbc!"
    ), console.warn(
      "如果你在非flutter端调试,调用flutter方法将不会产生任何作用,且不会影响你继续调试其他功能。"
    );
    return;
  }
  if (typeof a != "string")
    throw new Error("call函数中你传给flutter端的信息不是一个字符串,将无法识别!");
  return window.flutter_inappwebview.callHandler(a, ...o);
});
class l {
}
// 完成操作/路由后退
t(l, "done", async () => s.call("done")), // 短提示
t(l, "toast", async (a) => s.call("toast", a)), // 模态提示
t(l, "modalTips", async (a, o) => s.call("modalTips", a, o)), // 模态确认询问
t(l, "modalConfirm", async (a, o) => s.call("modalConfirm", a, o)), // 模态进度条展示
t(l, "modalLoading", async (a) => s.call("modalLoading", a)), // 模态进度条展示
t(l, "modalProgress", async (a) => s.call("modalProgress", a)), // 模态进度条设置值
t(l, "modalProgressSet", async (a) => s.call("modalProgressSet", a)), // 模态进度条增加值
t(l, "modalProgressAdd", async (a) => s.call("modalProgressAdd", a)), // 写入本地缓存值
t(l, "recordLocal", async (a, o) => s.call("recordLocal", a, o)), // 读取本地缓存值
t(l, "readLocal", async (a) => s.call("readLocal", a)), // 到ip地址配置处去
t(l, "ipconfig", async () => s.call("ipConfig"));
class r {
}
// app 更新
t(r, "appUpdate", async (a, o) => s.call("appUpdate", a, o)), // 拨打电话
t(r, "phonecall", async (a) => s.call("phonecall", a)), // 外部浏览器打开网页
t(r, "launchInExplorer", async (a) => s.call("launchInExplorer", a)), // 内部浏览器打开网页
t(r, "launchInnerExplorer", async (a) => s.call("launchInnerExplorer", a)), // 扫描二维码
t(r, "scanQR", async () => s.call("scannerQR")), // 扫描条形码
t(r, "scanBarcode", async () => s.call("scannerBarcode")), // 混合扫描（二维码或条形码）
t(r, "scan", async () => s.call("scanner")), // 检测网络连接状态
t(r, "checkNetworkType", async () => s.call("checkNetworkType")), // 获取 safeHeights
t(r, "getSafeHeight", async () => s.call("getSafeHeight")), // 设置顶部条风格为深色
t(r, "setTopbarStyleToDark", async () => s.call("setTopbarStyleToDark")), // 设置顶部条风格为浅色
t(r, "setTopbarStyleToLight", async () => s.call("setTopbarStyleToLight")), // 去拍照
t(r, "takePhoto", async () => s.call("takePhoto")), // 震动(提醒)
t(r, "vibrate", async () => s.call("vibrate")), // 震动(触屏按键)
t(r, "heavyImpact", async () => s.call("heavyImpact")), // 将app设置为沉浸式渲染模式
t(r, "immersed", async () => s.call("immersed")), // 将app设置为非沉浸式渲染模式
t(r, "unImmersed", async () => s.call("unImmersed")), // 播放声音
t(r, "beep", async () => s.call("beep")), // 定时通知
t(r, "notification", async (a, o) => s.call("notification", a, o)), // 延时通知
t(r, "periodNotification", async (a, o, c) => s.call("periodNotification", a, o, c));
var m = /* @__PURE__ */ ((e) => (e.denied = "PermissionStatus.denied", e.granted = "PermissionStatus.granted", e.restricted = "PermissionStatus.restricted", e.limited = "PermissionStatus.limited", e.permanentlyDenied = "PermissionStatus.permanentlyDenied", e))(m || {});
class i {
}
// 打开App权限设置
t(i, "openAppSettings", async () => s.call("openAppSettings")), // 权限请求
// h5 通过 flutter 向设备请求权限
t(i, "request", async (a) => s.call(`pm_${a}`));
class n extends s {
}
t(n, "init", async () => new Promise((a, o) => {
  try {
    window.addEventListener("flutterInAppWebViewPlatformReady", () => {
      sessionStorage.setItem("flutterInAppWebViewPlatformReady", "true"), a(!0);
    });
  } catch (c) {
    console.error(c), o(c);
  }
})), // Service_base
t(n, "done", l.done), t(n, "toast", l.toast), t(n, "modalTips", l.modalTips), t(n, "modalConfirm", l.modalConfirm), t(n, "modalLoading", l.modalLoading), t(n, "modalProgress", l.modalProgress), t(n, "modalProgressSet", l.modalProgressSet), t(n, "modalProgressAdd", l.modalProgressAdd), t(n, "recordLocal", l.recordLocal), t(n, "readLocal", l.readLocal), t(n, "ipconfig", l.ipconfig), // Service_device
t(n, "appUpdate", r.appUpdate), t(n, "phonecall", r.phonecall), t(n, "launchInExplorer", r.launchInExplorer), t(n, "launchInnerExplorer", r.launchInnerExplorer), t(n, "scanQR", r.scanQR), t(n, "scanBarcode", r.scanBarcode), t(n, "scan", r.scan), t(n, "checkNetworkType", r.checkNetworkType), t(n, "getSafeHeight", r.getSafeHeight), t(n, "setTopbarStyleToDark", r.setTopbarStyleToDark), t(n, "setTopbarStyleToLight", r.setTopbarStyleToLight), t(n, "takePhoto", r.takePhoto), t(n, "vibrate", r.vibrate), t(n, "heavyImpact", r.heavyImpact), t(n, "immersed", r.immersed), t(n, "unImmersed", r.unImmersed), t(n, "beep", r.beep), t(n, "notification", r.notification), t(n, "periodNotification", r.periodNotification);
export {
  m as PermissionStatus,
  n as fc,
  i as fp
};
