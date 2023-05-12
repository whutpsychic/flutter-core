<template>
  <main>
    <div class="top-logos">
      <img alt="flutter" src="@/assets/flutter.png" />
      <bold>+</bold>
      <img alt="vant" src="@/assets/vant.png" />
    </div>
    <div class="list">
      <RouterLink to="/aboutVant">
        <p>查看 Vant 组件</p><van-icon name="arrow" />
      </RouterLink>
      <RouterLink to="/aboutFlutter">
        <p>查看 Flutter 服务</p><van-icon name="arrow" />
      </RouterLink>
    </div>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink }
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