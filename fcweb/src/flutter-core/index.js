// =======================================
// 本模块为 flutter 与 h5 相互通信的对接模块
// 开发者：zbc
// 创建日期：2021-06-07
// 上次修改日期：2023-05-11
// =======================================
import fc from "./core.js"
import service from "./service.js"

const module = {};

// 初始化
// 此函数用于挂载默认设置,仅需在应用起始位置调用一次即可
module.init = (_this) => {

  // 注册后退函数
  fc.register("goback", () => {
    _this.$router.back()
  })

  // 注册 flutter 短提示
  fc.register("goback", () => {
    _this.$router.back()
  })
}

// 短提示
module.toast = service.toast












// 预留通道
module.call = fc.call

export default module;