// =======================================
// 本模块为 flutter 与 h5 相互通信的对接模块
// 开发者：zbc
// 创建日期：2021-06-07
// 上次修改日期：2023-05-12
// =======================================
import fc from "./core.js"
import service from "./service.js"

const module = {};

// 初始化
// 此函数用于挂载默认设置,仅需在应用起始位置调用一次即可
module.init = (_this) => {

  // 注册后退函数（供flutter调用）
  fc.register("goback", () => {
    _this.$router.back()
  })

}

// *************************** 系统通用 ***************************
// 注册/卸载函数
module.register = fc.register
module.unregister = fc.unregister

// 预留的万能通道函数
module.call = fc.call

export default { ...module, ...service };