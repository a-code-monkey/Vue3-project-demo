// xxx.vue

<template>
  <div>
    <div>name: {{ name }}</div>
    <div>全名：{{ fullName }}</div>
    <button @click="handleClick">修改Pinia</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

// 建议
const { name, fullName } = storeToRefs(userStore)


function handleClick() {
  // 不建议这样改
  // name.value = '莱莱'

  // 推荐的写法！！！
  userStore.updateName('李四')
}
</script>
