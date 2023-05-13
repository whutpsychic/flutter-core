import fc from "./index"
import { preName } from "./static"

const permissions = {};

// 所有权限列表
permissions.permissionList = ["camera", "storage"]

// 注册回调函数
permissions.await = (name, fn) => {
  if (name === "camera") {
    fc.register("aprcamera", fn)
  }
  else if (name === "storage") {
    fc.register("aprstorage", fn)
  }
}

// 卸载函数
permissions.uninstall = (name) => {
  if (name === "camera") {
    fc.unregister("aprcamera")
  } else if (name === "storage") {
    fc.unregister("aprstorage")
  }
}

// 权限请求
// h5 通过 flutter 向设备请求权限
permissions.request = (permissionName) => {
  // 规范检测
  if (typeof permissionName != "string")
    throw new Error("permissions.request函数中你传给flutter端的信息不是一个字符串,将无法识别!");
  else {
    let valid = false
    for (let it of permissions.permissionList) {
      if (it === permissionName) {
        valid = true;
        break;
      }
    }
    if (!valid) {
      throw new Error("requestPermission函数中你请求的权限不存在!");
    }
  }

  // 平台检测
  if (!window[`${preName}requestPermission`]) {
    console.error(
      "你所在的位置于flutter端没有注册requestPermission函数,请先行注册方可使用,或者联系zbc!"
    );
    console.warn(
      "如果你在非flutter端调试,那么requestPermission函数将不会产生任何作用,且不会影响你继续调试其他功能。"
    );
    return;
  }

  window[`${preName}requestPermission`].postMessage(permissionName);
}

export default { ...permissions };