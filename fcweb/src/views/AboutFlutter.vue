<template>
  <main>
    <van-button class="btn-item" type="primary" block @click="toast">Toast 短提示</van-button>
  </main>
</template>

<script>
import fc from "@/flutter-core/index"

export default {
  methods:{
    toast(){
      fc.toast("这是一则短提示消息！")
    }
  }
}

</script>

<style lang="scss" scoped>
main {
  padding: 20px;

  .btn-item {
    margin-bottom: 20px;
  }
}
</style>
