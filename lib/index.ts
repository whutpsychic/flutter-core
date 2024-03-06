// =======================================
// 本模块为 flutter 与 h5 相互通信的对接模块
// 配合 inappwebview 模块使用
// 开发者：zbc
// 创建日期：2024-01-15
// 上次修改日期：2024-03-04
// =======================================
import Fc from "./base/core";
import Service_base from "./service_base";
import Service_device from "./service_device";

function _isMobile(): boolean {
  return (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    ) != null
  );
}

// flutter 权限状态表
export enum PermissionStatus {
  // 未经申请，需要向系统申请
  denied = "PermissionStatus.denied",
  // 允许或本次允许
  granted = "PermissionStatus.granted",
  // 设备不允许触碰此规则，需要打开系统设置界面进行设定权限(iOS)
  restricted = "PermissionStatus.restricted",
  // 受限的授权(iOS14+)
  limited = "PermissionStatus.limited",
  // 未授权状态，需打开系统设置改变权限
  permanentlyDenied = "PermissionStatus.permanentlyDenied",
  // 该应用程序被临时授权发布不中断的用户请求(iOS12+)
  provisional = "PermissionStatus.provisional",
}

// flutter 网络连接状态表
export enum ConnectivityResult {
  // 蓝牙
  bluetooth = "ConnectivityResult.bluetooth",
  // wifi
  wifi = "ConnectivityResult.wifi",
  // 以太网
  ethernet = "ConnectivityResult.ethernet",
  // 移动网/蜂窝数据
  mobile = "ConnectivityResult.mobile",
  // VPN( Android only )
  vpn = "ConnectivityResult.vpn",
  // 未知类型 / iOS 使用VPN时
  other = "ConnectivityResult.other",
}

// 权限操作
export class fp {

  // 打开App权限设置
  public static openAppSettings = async (): Promise<void> => {
    return Fc.call("openAppSettings");
  };

  // 权限请求
  // h5 通过 flutter 向设备请求权限
  public static request = async (name: string): Promise<any> => Fc.call(`pm_${name}`);

}

// 功能操作
export class fc extends Fc implements Service_base, Service_device {

  public static init = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        if (_isMobile()) {
          window.addEventListener("flutterInAppWebViewPlatformReady", () => {
            sessionStorage.setItem('flutterInAppWebViewPlatformReady', 'true');
            resolve(true);
          })
        } else {
          console.warn(`您正在web平台运行程序，所有flutter接口将无法调用，但不影响您继续运行程序！`);
          console.log(`您正在web平台运行程序，所有flutter接口将无法调用，但不影响您继续运行程序！`);
          resolve(true);
        }
      }
      catch (err) {
        console.error(err);
        reject(err);
      }
    })
  }

  // Service_base
  public static done = Service_base.done;
  public static toast = Service_base.toast;
  public static modalTips = Service_base.modalTips;
  public static modalConfirm = Service_base.modalConfirm;
  public static modalLoading = Service_base.modalLoading;
  public static modalProgress = Service_base.modalProgress;
  public static modalProgressSet = Service_base.modalProgressSet;
  public static modalProgressAdd = Service_base.modalProgressAdd;
  public static recordLocal = Service_base.recordLocal;
  public static readLocal = Service_base.readLocal;
  public static ipConfig = Service_base.ipConfig;

  // Service_device
  public static appUpdate = Service_device.appUpdate;
  public static phonecall = Service_device.phonecall;
  public static launchInExplorer = Service_device.launchInExplorer;
  public static launchInnerExplorer = Service_device.launchInnerExplorer;
  public static scanQR = Service_device.scanQR;
  public static scanBarcode = Service_device.scanBarcode;
  public static scan = Service_device.scan;
  public static checkNetworkType = Service_device.checkNetworkType;
  public static getSafeHeight = Service_device.getSafeHeight;
  public static setTopbarStyleToDark = Service_device.setTopbarStyleToDark;
  public static setTopbarStyleToLight = Service_device.setTopbarStyleToLight;
  public static takePhoto = Service_device.takePhoto;
  public static vibrate = Service_device.vibrate;
  public static heavyImpact = Service_device.heavyImpact;
  public static immersed = Service_device.immersed;
  public static unImmersed = Service_device.unImmersed;
  public static beep = Service_device.beep;
  public static notification = Service_device.notification;
  public static periodNotification = Service_device.periodNotification;

}

