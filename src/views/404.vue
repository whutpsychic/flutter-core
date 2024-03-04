<template>
  <div>
    <p>真是抱歉，您走丢了！</p>
    <p>将会在{{ secondLeft + 1 }}秒后返回首页</p>
    <el-button type="primary" @click="backupNow">立即返回首页</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import type { Ref } from 'vue';

const router = useRouter();
// --------------- data ---------------
const secondLeft: Ref<number> = ref(5);
const breakup: Ref<boolean> = ref(false);
// --------------- lifecycle ---------------
onMounted(() => {
  loop();
});
// --------------- methods ---------------

const loop = (): void => {
  if (breakup.value) {
    return;
  }
  const left = secondLeft.value + 1
  if (left < 2) {
    router.replace("/");
  } else {
    secondLeft.value--;
    setTimeout(() => {
      loop();
    }, 1000);
  }
}

const backupNow = (): void => {
  breakup.value = true;
  router.replace('/');
}

</script>

<style scoped>
div {
  padding: 20px;
}

button {
  margin: 20px 0;
}
</style>
