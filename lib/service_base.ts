// =======================================
// 基础功能
// 开发者：zbc
// 创建日期：2024-01-15
// 上次修改日期：2024-03-05
// =======================================
import Fc from "./base/core";

export default class ServiceBase {
  // 完成操作/路由后退
  static done = async (): Promise<void> => Fc.call("done");

  // 短提示
  static toast = async (msg: string): Promise<void> => {
    return Fc.call(`toast`, msg);
  };

  // 模态提示
  static modalTips = async (title: string, msg: string): Promise<void> => {
    return Fc.call(`modalTips`, title, msg);
  };

  // 模态确认询问
  static modalConfirm = async (title: string, msg: string): Promise<void> => {
    return Fc.call(`modalConfirm`, title, msg).then((res: string) => {
      if (res === 'false') throw new Error(`cancel`);
    });
  };

  // 模态进度条展示
  static modalLoading = async (content: string): Promise<boolean> => {
    return Fc.call(`modalLoading`, content);
  };

  // 模态进度条展示
  static modalProgress = async (content: string): Promise<boolean> => {
    return Fc.call(`modalProgress`, content);
  };

  // 模态进度条设置值
  static modalProgressSet = async (value: string | number): Promise<boolean> => {
    return Fc.call(`modalProgressSet`, value);
  };

  // 模态进度条增加值
  static modalProgressAdd = async (value: string | number): Promise<boolean> => {
    return Fc.call(`modalProgressAdd`, value);
  };

  // 写入本地缓存值
  static recordLocal = async (key: string, value: string | number): Promise<boolean> => {
    return Fc.call(`recordLocal`, key, value);
  };

  // 读取本地缓存值
  static readLocal = async (key: string): Promise<string> => {
    return Fc.call(`readLocal`, key);
  };

  // 到ip地址配置处去
  static ipConfig = async (): Promise<void> => {
    return Fc.call(`ipConfig`);
  };
};