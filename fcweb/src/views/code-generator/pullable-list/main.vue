<template>
  <div class="m-can">
    <el-button class="btn-item" type="primary" @click="downloadFile">下载文件</el-button>
  </div>
</template>

<script setup>
import JSZip from "jszip";
import { saveAs } from 'file-saver';

import pageMainVueStrFn from "./template/page-main.js";
import itemMainVueStrFn from "./template/item-main.js";
import apiIndexJsStrFn from "./template/api-index.js";

const downloadFile = () => {

  // console.log(pageMainVueStr)
  // console.log(itemMainVueStr)
  // console.log(apiIndexJsStr)
  var zip = new JSZip();

  // create a file
  const pageMainVueStr = pageMainVueStrFn({ title: "标题" });
  zip.file("main.vue", pageMainVueStr);

  // create a file and a folder
  const itemMainVueStr = itemMainVueStrFn();
  zip.file("item/main.vue", itemMainVueStr);

  // create a file and a folder
  const apiIndexJsStr = apiIndexJsStrFn();
  zip.file("api/index.js", apiIndexJsStr);

  // 把打包内容异步转成blob二进制格式
  zip.generateAsync({ type: "blob" }).then(function (content) {
    // content就是blob数据，这里以example.zip名称下载    
    // 使用了FileSaver.js  
    saveAs(content, "example.zip");
  });

}

</script>

<style lang="scss" scoped></style>
