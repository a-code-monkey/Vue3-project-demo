// Child.vue

<template>
  <div>
    Child：<button @click="handleClick">打声招呼</button>
    <p>type is: {{ bool }}</p>
    <el-button type="primary" @click="checkType">查看ref类型</el-button>
  </div>
</template>

<script setup>
import { ref,isRef } from 'vue'
import Bus from '@/utils/bus.js'

function handleClick() {
  Bus.emit('sayHello')
}

const bool = ref(false);
const type = isRef(bool);
const checkType = () => {
  console.log(type);
}
</script>
