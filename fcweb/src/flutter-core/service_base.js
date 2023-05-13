import fc from "./index"
import { argsSpliter } from "./static"

const service = {};

service.done = () => fc.call("done")

// 短提示
service.toast = (msg) => {
  fc.call(`toast${argsSpliter}${msg}`)
}

// 模态提示
service.modalTips = async (title, msg) => {
  fc.call(`modalTips${argsSpliter}${title}${argsSpliter}${msg}`)
}

// 模态确认询问
service.modalConfirm = async (title, msg) => {
  fc.call(`modalConfirm${argsSpliter}${title}${argsSpliter}${msg}`)
}

// 模态进度条展示
service.modalLoading = async (content) => {
  fc.call(`modalLoading${argsSpliter}${content}`)
}

// 模态进度条展示
service.modalProgress = async (content) => {
  fc.call(`modalProgress${argsSpliter}${content}`)
}

// 模态进度条设置值
service.modalProgressSet = async (value) => {
  fc.call(`modalProgressSet${argsSpliter}${value}`)
}

// 模态进度条增加值
service.modalProgressAdd = async (value) => {
  fc.call(`modalProgressAdd${argsSpliter}${value}`)
}

export default service;