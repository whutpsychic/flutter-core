<template>
  <main>
    <div class="top-logos">
      <img alt="flutter" src="@/assets/flutter.png" />
      <bold>+</bold>
      <img alt="vant" src="@/assets/vant.png" />
    </div>
    <div class="list">
      <RouterLink to="" @click="viewVant">
        <p>查看 Vant 组件</p><van-icon name="arrow" />
      </RouterLink>
      <RouterLink to="/flutterBase">
        <p>Flutter 基础功能</p><van-icon name="arrow" />
      </RouterLink>
      <RouterLink to="/flutterDevice">
        <p>Flutter 设备功能</p><van-icon name="arrow" />
      </RouterLink>
      <RouterLink to="/devicePermissions">
        <p>Flutter 权限请求</p><van-icon name="arrow" />
      </RouterLink>
    </div>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router'
import fc from "flutter-core/index"

export default {
  components: { RouterLink },
  methods: {
    viewVant() {
      fc.launchInnerExplorer("https://vant-contrib.gitee.io/vant/mobile.html#/zh-CN#/zh-CN/quickstart")
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 20px;
}

.top-logos {
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  bold {
    font-size: 30px;
    margin: 0 0.5em;
  }
}

.list {
  margin-top: 20px;
  padding: 20px 0;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    margin-top: 20px;
  }

  a:first-child {
    margin-top: 0;
  }
}
</style>