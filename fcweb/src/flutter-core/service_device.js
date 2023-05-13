import fc from "./index"
import { argsSpliter } from "./static"

const service = {};

service.done = () => fc.call("done")

// app 更新
service.appUpdate = async (url) => {
  fc.call(`appUpdate${argsSpliter}${url}`)
}

// 拨打电话
service.phonecall = async (number) => {
  fc.call(`phonecall${argsSpliter}${number}`)
}

// 内部浏览器打开网页
service.launchInExplorer = async (url) => {
  fc.call(`launchInExplorer${argsSpliter}${url}`)
}

// 外部浏览器打开网页
service.launchInnerExplorer = async (url) => {
  fc.call(`launchInnerExplorer${argsSpliter}${url}`)
}

export default service;