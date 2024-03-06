<template>
  <main class="doc-content">
    <h1>权限请求</h1>
    <h3>{{ "Promise<any>" }}</h3>
    <h3>{{ `fp.request(permissionName: string)` }}</h3>
    <p>调用此方法通知 flutter 向设备请求相关权限。您可以按照下列方式引入fp模块。</p>
    <highlightjs language="javascript" :code="`import { fp } from 'flutter-core';`" />
    <p>请求权限后可能得到的字符串结果如下：</p>
    <p class="args">PermissionStatus.denied 未经申请，需要向系统申请</p>
    <p class="args">PermissionStatus.granted 允许或本次允许</p>
    <p class="args">PermissionStatus.restricted 设备不允许触碰此规则，需要打开系统设置界面进行设定权限( iOS only )</p>
    <p class="args">PermissionStatus.limited 受限的授权( iOS14+ )</p>
    <p class="args">PermissionStatus.permanentlyDenied 未授权状态，需打开系统设置改变权限</p>
    <p class="args">PermissionStatus.provisional 该应用程序被临时授权发布不中断的用户请求( iOS12+ )</p>
    <el-collapse v-model="collapsed">
      <el-collapse-item :title="`点击展开原文描述`" name="1">
        <el-input v-model="permissionStatus" disabled autosize type="textarea" />
      </el-collapse-item>
    </el-collapse>
    <div style="height:30px;" />
    <h3>请求照相机 / 摄像机权限 {{ `fp.request("camera")` }}</h3>
    <h5>{{ `
      <script lang="ts" /> ` }}
    </h5>
    <highlightjs language="javascript" :code="getCodeStr('camera')" />
    <h3>请求读写数据权限 {{ `fp.request("storage")` }}</h3>
    <h5>{{ `
      <script lang="ts" />` }}
    </h5>
    <highlightjs language="javascript" :code="getCodeStr('storage')" />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';

const collapsed: Ref<boolean> = ref(true);

const permissionStatus: string = `      /// The user denied access to the requested feature, permission needs to be
      /// asked first.
      denied,

      /// The user granted access to the requested feature.
      granted,

      /// The OS denied access to the requested feature. The user cannot change
      /// this app's status, possibly due to active restrictions such as parental
      /// controls being in place.
      ///
      /// *Only supported on iOS.*
      restricted,

      /// The user has authorized this application for limited access. So far this
      /// is only relevant for the Photo Library picker.
      ///
      /// *Only supported on iOS (iOS14+).*
      limited,

      /// Permission to the requested feature is permanently denied, the permission
      /// dialog will not be shown when requesting this permission. The user may
      /// still change the permission status in the settings.
      ///
      /// *On Android:*
      /// Android 11+ (API 30+): whether the user denied the permission for a second
      /// time.
      /// Below Android 11 (API 30): whether the user denied access to the requested
      /// feature and selected to never again show a request.
      ///
      /// *On iOS:*
      /// If the user has denied access to the requested feature.
      permanentlyDenied,

      /// The application is provisionally authorized to post non-interruptive user
      /// notifications.
      ///
      /// *Only supported on iOS (iOS12+).*
      provisional,`;

const getCodeStr = (key: string): string => {
  return `fp.request('${key}').then((res) => {
  alert(JSON.stringify(res))
});`
}

</script>

<style lang="scss" scoped></style>
