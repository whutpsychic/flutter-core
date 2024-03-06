var d = Object.defineProperty;
var p = (o, a, l) => a in o ? d(o, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : o[a] = l;
var t = (o, a, l) => (p(o, typeof a != "symbol" ? a + "" : a, l), l);
class n {
}
// 预留的向 flutter 端发送一般信息的默认函数
t(n, "call", async (a, ...l) => {
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
  return window.flutter_inappwebview.callHandler(a, ...l);
});
class e {
}
// 完成操作/路由后退
t(e, "done", async () => n.call("done")), // 短提示
t(e, "toast", async (a) => n.call("toast", a)), // 模态提示
t(e, "modalTips", async (a, l) => n.call("modalTips", a, l)), // 模态确认询问
t(e, "modalConfirm", async (a, l) => n.call("modalConfirm", a, l).then((i) => {
  if (i === "false")
    throw new Error("cancel");
})), // 模态进度条展示
t(e, "modalLoading", async (a) => n.call("modalLoading", a)), // 模态进度条展示
t(e, "modalProgress", async (a) => n.call("modalProgress", a)), // 模态进度条设置值
t(e, "modalProgressSet", async (a) => n.call("modalProgressSet", a)), // 模态进度条增加值
t(e, "modalProgressAdd", async (a) => n.call("modalProgressAdd", a)), // 写入本地缓存值
t(e, "recordLocal", async (a, l) => n.call("recordLocal", a, l)), // 读取本地缓存值
t(e, "readLocal", async (a) => n.call("readLocal", a)), // 到ip地址配置处去
t(e, "ipConfig", async () => n.call("ipConfig"));
class r {
}
// app 更新
t(r, "appUpdate", async (a, l) => n.call("appUpdate", a, l)), // 拨打电话
t(r, "phonecall", async (a) => n.call("phonecall", a)), // 外部浏览器打开网页
t(r, "launchInExplorer", async (a) => n.call("launchInExplorer", a)), // 内部浏览器打开网页
t(r, "launchInnerExplorer", async (a) => n.call("launchInnerExplorer", a)), // 扫描二维码
t(r, "scanQR", async () => n.call("scannerQR")), // 扫描条形码
t(r, "scanBarcode", async () => n.call("scannerBarcode")), // 混合扫描（二维码或条形码）
t(r, "scan", async () => n.call("scanner")), // 检测网络连接状态
t(r, "checkNetworkType", async () => n.call("checkNetworkType")), // 获取 safeHeights
t(r, "getSafeHeight", async () => n.call("getSafeHeight")), // 设置顶部条风格为深色
t(r, "setTopbarStyleToDark", async () => n.call("setTopbarStyleToDark")), // 设置顶部条风格为浅色
t(r, "setTopbarStyleToLight", async () => n.call("setTopbarStyleToLight")), // 去拍照
t(r, "takePhoto", async () => n.call("takePhoto")), // 震动(提醒)
t(r, "vibrate", async () => n.call("vibrate")), // 震动(触屏按键)
t(r, "heavyImpact", async () => n.call("heavyImpact")), // 将app设置为沉浸式渲染模式
t(r, "immersed", async () => n.call("immersed")), // 将app设置为非沉浸式渲染模式
t(r, "unImmersed", async () => n.call("unImmersed")), // 播放声音
t(r, "beep", async () => n.call("beep")), // 定时通知
t(r, "notification", async (a, l) => n.call("notification", a, l)), // 延时通知
t(r, "periodNotification", async (a, l, i) => n.call("periodNotification", a, l, i));
function u() {
  return navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  ) != null;
}
var m = /* @__PURE__ */ ((o) => (o.denied = "PermissionStatus.denied", o.granted = "PermissionStatus.granted", o.restricted = "PermissionStatus.restricted", o.limited = "PermissionStatus.limited", o.permanentlyDenied = "PermissionStatus.permanentlyDenied", o.provisional = "PermissionStatus.provisional", o))(m || {}), y = /* @__PURE__ */ ((o) => (o.bluetooth = "ConnectivityResult.bluetooth", o.wifi = "ConnectivityResult.wifi", o.ethernet = "ConnectivityResult.ethernet", o.mobile = "ConnectivityResult.mobile", o.vpn = "ConnectivityResult.vpn", o.other = "ConnectivityResult.other", o))(y || {});
class c {
}
// 打开App权限设置
t(c, "openAppSettings", async () => n.call("openAppSettings")), // 权限请求
// h5 通过 flutter 向设备请求权限
t(c, "request", async (a) => n.call(`pm_${a}`));
class s extends n {
}
t(s, "init", async () => new Promise((a, l) => {
  try {
    u() ? window.addEventListener("flutterInAppWebViewPlatformReady", () => {
      sessionStorage.setItem("flutterInAppWebViewPlatformReady", "true"), a(!0);
    }) : (console.warn("您正在web平台运行程序，所有flutter接口将无法调用，但不影响您继续运行程序！"), console.log("您正在web平台运行程序，所有flutter接口将无法调用，但不影响您继续运行程序！"), a(!0));
  } catch (i) {
    console.error(i), l(i);
  }
})), // Service_base
t(s, "done", e.done), t(s, "toast", e.toast), t(s, "modalTips", e.modalTips), t(s, "modalConfirm", e.modalConfirm), t(s, "modalLoading", e.modalLoading), t(s, "modalProgress", e.modalProgress), t(s, "modalProgressSet", e.modalProgressSet), t(s, "modalProgressAdd", e.modalProgressAdd), t(s, "recordLocal", e.recordLocal), t(s, "readLocal", e.readLocal), t(s, "ipConfig", e.ipConfig), // Service_device
t(s, "appUpdate", r.appUpdate), t(s, "phonecall", r.phonecall), t(s, "launchInExplorer", r.launchInExplorer), t(s, "launchInnerExplorer", r.launchInnerExplorer), t(s, "scanQR", r.scanQR), t(s, "scanBarcode", r.scanBarcode), t(s, "scan", r.scan), t(s, "checkNetworkType", r.checkNetworkType), t(s, "getSafeHeight", r.getSafeHeight), t(s, "setTopbarStyleToDark", r.setTopbarStyleToDark), t(s, "setTopbarStyleToLight", r.setTopbarStyleToLight), t(s, "takePhoto", r.takePhoto), t(s, "vibrate", r.vibrate), t(s, "heavyImpact", r.heavyImpact), t(s, "immersed", r.immersed), t(s, "unImmersed", r.unImmersed), t(s, "beep", r.beep), t(s, "notification", r.notification), t(s, "periodNotification", r.periodNotification);
export {
  y as ConnectivityResult,
  m as PermissionStatus,
  s as fc,
  c as fp
};
