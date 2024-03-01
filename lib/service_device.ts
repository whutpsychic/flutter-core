// =======================================
// 设备功能
// 开发者：zbc
// 创建日期：2024-01-15
// 上次修改日期：2024-03-01
// =======================================
import Fc from "./base/core";

export default class ServiceDevice {
  // app 更新
  static appUpdate = async (url: string, filename: string): Promise<void> => {
    return Fc.call(`appUpdate`, url, filename);
  };

  // 拨打电话
  static phonecall = async (number: string | number): Promise<void> => {
    return Fc.call(`phonecall`, number);
  };

  // 外部浏览器打开网页
  static launchInExplorer = async (url: string): Promise<void> => {
    return Fc.call(`launchInExplorer`, url);
  };

  // 内部浏览器打开网页
  static launchInnerExplorer = async (url: string): Promise<void> => {
    return Fc.call(`launchInnerExplorer`, url);
  };

  // 扫描二维码
  static scanQR = async (): Promise<string> => {
    return Fc.call(`scannerQR`);
  };

  // 扫描条形码
  static scanBarcode = async (): Promise<string> => {
    return Fc.call(`scannerBarcode`);
  };

  // 混合扫描（二维码或条形码）
  static scan = async (): Promise<string> => {
    return Fc.call(`scanner`);
  };

  // 检测网络连接状态
  static checkNetworkType = async (): Promise<string> => {
    return Fc.call(`checkNetworkType`);
  };

  // 获取 safeHeights
  static getSafeHeight = async (): Promise<number[]> => {
    return Fc.call(`getSafeHeight`);
  };

  // 设置顶部条风格为深色
  static setTopbarStyleToDark = async (): Promise<void> => {
    return Fc.call(`setTopbarStyleToDark`);
  };

  // 设置顶部条风格为浅色
  static setTopbarStyleToLight = async (): Promise<void> => {
    return Fc.call(`setTopbarStyleToLight`);
  };

  // 去拍照
  static takePhoto = async (): Promise<string> => {
    return Fc.call(`takePhoto`);
  };

  // 震动(提醒)
  static vibrate = async (): Promise<void> => {
    return Fc.call(`vibrate`);
  };

  // 震动(触屏按键)
  static heavyImpact = async (): Promise<void> => {
    return Fc.call(`heavyImpact`);
  };

  // 将app设置为沉浸式渲染模式
  static immersed = async (): Promise<void> => {
    return Fc.call(`immersed`);
  };

  // 将app设置为非沉浸式渲染模式
  static unImmersed = async (): Promise<void> => {
    return Fc.call(`unImmersed`);
  };

  // 播放声音
  static beep = async (): Promise<void> => {
    return Fc.call(`beep`)
  }

  // 定时通知
  static notification = async (title: string, content: string): Promise<void> => {
    return Fc.call(`notification`, title, content)
  }

  // 延时通知
  static periodNotification = async (title: string, content: string, timer: number): Promise<void> => {
    return Fc.call(`periodNotification`, title, content, timer)
  }
};