// Parent.vue

<template>
  <div>
    Mitt
    <Child />
  </div>
</template>

<script setup>
import Child from './childD.vue'
import Bus from '@/utils/bus.js'

Bus.on('sayHello', () => console.log('hello'))
</script>
