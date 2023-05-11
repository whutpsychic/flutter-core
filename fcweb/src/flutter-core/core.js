// =======================================
// 本模块为 flutter 与 h5 相互通信的对接模块
// 开发者：zbc
// 创建日期：2021-06-07
// 上次修改日期：2023-05-11
// =======================================
const fcore = {};

// 权限列表
fcore.permissionList = ["photos", "camera", "storage"];

// flutter主动向js发送信息,js须负责以此初始化监听注册
// 其原理是flutter会向window续写函数,所有调用皆来自window对象
fcore.register = (name, callback) => {
  // 规范检测
  if (typeof name != "string")
    throw new Error("fl.register函数传入的name不是一个字符串");
  if (typeof callback != "function")
    throw new Error("fl.register函数传入的callback不是一个函数");

  window[name] = callback;
};

// 建议在componentUnmonut当中将之前注册的函数注销掉,以免引起不必要的bug
fcore.unregister = (name) => {
  // 规范检测
  if (typeof name != "string")
    throw new Error("fl.unregister函数传入的name不是一个字符串");
  window[name] = undefined;
};

// 预留的向 flutter 端发送一般信息的默认函数
fcore.call = (info) => {
  // 规范检测
  if (typeof info != "string")
    throw new Error("call函数中你传给flutter端的信息不是一个字符串,将无法识别!");
  // 平台检测
  if (!window.call) {
    console.error(
      "你所在的位置于flutter端没有注册call函数,请先行注册方可使用,或者联系zbc!"
    );
    console.warn(
      "如果你在非flutter端调试,那么call函数将不会产生任何作用,且不会影响你继续调试其他功能。"
    );
    return;
  }

  window.call.postMessage(info);
};

// 权限请求
// h5 只能向 flutter 请求设备权限,至于权限是否已经获取成功需要开发者调用 fcore.checkPermission 函数自行查验
fcore.requestPermission = (permissionName) => {
  // 规范检测
  if (typeof permissionName != "string")
    throw new Error("requestPermission函数中你传给flutter端的信息不是一个字符串,将无法识别!");
  else {
    let valid = false
    for (let it of fcore.permissionList) {
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
  if (!window.mFlutterPermissionRequester) {
    console.error(
      "你所在的位置于flutter端没有注册requestPermission函数,请先行注册方可使用,或者联系zbc!"
    );
    console.warn(
      "如果你在非flutter端调试,那么requestPermission函数将不会产生任何作用,且不会影响你继续调试其他功能。"
    );
    return;
  }

  window.mFlutterPermissionRequester.postMessage(permissionName);
}

// 检测设备权限
fcore.checkPermission = (permissionName) => {
  try {
    return window["mFlutterPermissions"][permissionName]
  } catch (e) {
    return false;
  }
}

// 检测设备权限
fcore.checkPermissionFromFlutter = (permissionName) => {
  // 规范检测
  if (typeof permissionName != "string")
    throw new Error("checkPermissionFromFlutter函数中你传给flutter端的信息不是一个字符串,将无法识别!");
  else {
    let valid = false
    for (let it of fcore.permissionList) {
      if (it === permissionName) {
        valid = true;
        break;
      }
    }
    if (!valid) {
      throw new Error("checkPermissionFromFlutter函数中你请求的权限不存在!");
    }
  }

  // 平台检测
  if (!window.mFlutterPermissionRequester) {
    console.error(
      "你所在的位置于flutter端没有注册checkPermissionFromFlutter函数,请先行注册方可使用,或者联系zbc!"
    );
    console.warn(
      "如果你在非flutter端调试,那么checkPermissionFromFlutter函数将不会产生任何作用,且不会影响你继续调试其他功能。"
    );
    return;
  }

  window.mFlutterPermissionChecker.postMessage(permissionName);
}


export default fcore;