import fc from "./index"
import { argsSpliter } from "./static"

const service = {};

// 短提示
service.toast = (msg) => {
  fc.call(`toast${argsSpliter}${msg}`)
}




export default service;