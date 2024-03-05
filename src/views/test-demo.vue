<template>
  <div class="page-container">
    <div class="btn-wrapper">
      <ul>
        <li>{{ info }}</li>
        <li> ------------------ 基础功能 ------------------ </li>
        <li><el-button type="primary" @click="ipConfig">IP设置</el-button></li>
        <li><el-button type="primary" @click="toast">Toast短提示</el-button></li>
        <li><el-button type="primary" @click="confirm">确认提示</el-button></li>
        <li><el-button type="primary" @click="modalLoading">模态加载中</el-button></li>
        <li><el-button type="primary" @click="modalProgress">模态进度条</el-button></li>
        <li><el-button type="primary" @click="modalTips">模态提示</el-button></li>
        <li><el-button type="primary" @click="writeLocal">写入本地缓存数据</el-button></li>
        <li><el-button type="primary" @click="readLocal">读取本地缓存数据</el-button></li>
        <li> ------------------ 设备功能 ------------------ </li>
        <li><el-button type="primary" @click="appUpdate">app更新</el-button></li>
        <li><el-button type="primary" @click="phonecall">拨打电话</el-button></li>
        <li><el-button type="primary" @click="launchInExplorer">用手机默认浏览器打开</el-button></li>
        <li><el-button type="primary" @click="launchInnerExplorer">用程序内置浏览器打开</el-button></li>
        <li><el-button type="primary" @click="scanQR">扫描二维码</el-button></li>
        <li><el-button type="primary" @click="scanBarcode">扫描条形码</el-button></li>
        <li><el-button type="primary" @click="scan">混合扫描</el-button></li>
        <li><el-button type="primary" @click="checkNetworkType">检查联网类型</el-button></li>
        <li><el-button type="primary" @click="getSafeHeight">获取安全高度</el-button></li>
        <li><el-button type="primary" @click="setTopbarStyleToDark">深色风格</el-button></li>
        <li><el-button type="primary" @click="setTopbarStyleToLight">浅色风格</el-button></li>
        <li><el-button type="primary" @click="takePhoto">相机拍照</el-button></li>
        <li> ------------------ 权限申请 ------------------ </li>
        <li><el-button type="primary" @click="pcamera">照相机/摄像头</el-button></li>
        <li><el-button type="primary" @click="pstorage">读写数据</el-button></li>
        <li><el-button type="primary" @click="openAppSettings">打开手机权限设置</el-button></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fc, fp } from '$/index';
import type { Ref } from 'vue';
import { ref } from 'vue';

const info: Ref<string> = ref('');

const ipConfig = async (): Promise<void> => {
  await fc.ipConfig();
};

const toast = async (): Promise<void> => {
  fc.toast('一段短提示信息');
}

// 在点确认时进入then，取消时进入catch
const confirm = async (): Promise<void> => {
  fc.modalConfirm('确认标题', '一段短提示信息')
    // 确认动作
    .then(() => {
      alert('您选择了确认');
    })
    // 取消动作
    .catch(() => {
      alert('您选择了取消');
    });
}

const modalLoading = async (): Promise<void> => {
  fc.modalLoading(`加载中...`);
  setTimeout(() => {
    fc.done();
  }, 1500)
}

const modalProgress = async (): Promise<void> => {
  fc.modalProgress('正在处理...');

  setTimeout(() => {
    fc.modalProgressAdd(0.1);
  }, 500)
  setTimeout(() => {
    fc.modalProgressAdd(0.4);
  }, 1000)
  setTimeout(() => {
    fc.modalProgressSet(1);
  }, 2000)

  setTimeout(() => {
    fc.done();
  }, 3000)
}

const modalTips = async (): Promise<void> => {
  fc.modalTips('标题', '内容').then(() => {
    alert('接下来的动作')
  });
}

const writeLocal = async (): Promise<void> => {
  fc.recordLocal('keystr', '这是一段编写好的内容').then((success: boolean) => {
    if (success) {
      alert('写入本地缓存成功');
    }
    return fc.readLocal('keystr');
  }).then((res: string | null) => {
    fc.toast(`${res}`);
  })
}

const readLocal = async (): Promise<void> => {
  fc.readLocal('keystr').then((res: string | null) => {
    fc.toast(`${res}`);
  })
}

const appUpdate = async (): Promise<void> => {
  fc.appUpdate('hehe.com', 'uter');
}

const phonecall = async (): Promise<void> => {
  fc.phonecall(`13844857636`);
}

const launchInExplorer = async (): Promise<void> => {
  fc.launchInExplorer('https://www.baidu.com');
}

const launchInnerExplorer = async (): Promise<void> => {
  fc.launchInnerExplorer('https://www.tencent.com');
}

// 注意得到结果后不要立即进行 alert 这种暂停程序进程的操作，请等待至少300ms后再执行相关操作，否则将可能会无法正常运行甚至丢失结果
const scanQR = async (): Promise<void> => {
  fc.scanQR().then((res: string) => {
    setTimeout(() => {
      alert(res)
    }, 300)
    if (typeof res === 'string') {
      info.value = res;
    }
    else {
      info.value = '没有拿到结果';
    }
  })
}

const scanBarcode = async (): Promise<void> => {
  fc.scanBarcode().then((res: string) => {
    setTimeout(() => {
      alert(res)
    }, 300)
    if (typeof res === 'string') {
      info.value = res;
    }
    else {
      info.value = '没有拿到结果';
    }
  })
}

const scan = async (): Promise<void> => {
  fc.scan().then((res: string) => {
    setTimeout(() => {
      alert(res)
    }, 300)
    if (typeof res === 'string') {
      info.value = res;
    }
    else {
      info.value = '没有拿到结果';
    }
  })
}

const checkNetworkType = async (): Promise<void> => {
  fc.checkNetworkType().then((res: string) => {
    alert(res)
  })
}

const getSafeHeight = async (): Promise<void> => {
  fc.getSafeHeight().then((res: number[]) => {
    alert(JSON.stringify(res))
  })
}

const setTopbarStyleToDark = async (): Promise<void> => {
  fc.setTopbarStyleToDark();
}

const setTopbarStyleToLight = async (): Promise<void> => {
  fc.setTopbarStyleToLight();
}

const takePhoto = async (): Promise<void> => {
  fc.takePhoto().then((res: string) => {
    setTimeout(() => {
      alert(res)
    }, 1000)
  })
}

const pcamera = async (): Promise<void> => {
  fp.request('camera').then((res) => {
    alert(JSON.stringify(res))
  })
}

const pstorage = async (): Promise<void> => {
  fp.request('storage').then((res) => {
    alert(JSON.stringify(res))
  })
}

const openAppSettings = async (): Promise<void> => {
  fp.openAppSettings();
}

</script>

<style scoped>
.page-container {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 80px 0;
}

.btn-wrapper {
  width: 400px;
  min-height: 400px;
}

.btn-wrapper li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}
</style>
