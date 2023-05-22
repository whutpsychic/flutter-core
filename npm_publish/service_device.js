import fc from "./index"
import { argsSpliter } from "./base/static"

const service = {};

service.done = () => fc.call("done")

// app 更新
service.appUpdate = (url) => {
  fc.call(`appUpdate${argsSpliter}${url}`)
}

// 拨打电话
service.phonecall = (number) => {
  fc.call(`phonecall${argsSpliter}${number}`)
}

// 内部浏览器打开网页
service.launchInExplorer = (url) => {
  fc.call(`launchInExplorer${argsSpliter}${url}`)
}

// 外部浏览器打开网页
service.launchInnerExplorer = (url) => {
  fc.call(`launchInnerExplorer${argsSpliter}${url}`)
}

// 扫描二维码
service.scanQR = () => {
  fc.call(`scannerQR`)
}

// 扫描条形码
service.scanBarcode = () => {
  fc.call(`scannerBarcode`)
}

// 混合扫描（二维码或条形码）
service.scan = () => {
  fc.call(`scanner`)
}

export default service;