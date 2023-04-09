// Parent.vue

<template>
  <el-button type="primary" @click="skipPageC">跳转到PageC</el-button>
  <el-button type="primary" @click="skipPageD">跳转到PageD</el-button>
  <Child></Child>
</template>

<script setup>
    import { ref, provide, readonly } from 'vue'
    import { useRouter } from 'vue-router';
    import Child from './components/childB.vue'

    const name = ref('猛虎下山');
    const msg = ref('雷猴');

    // 使用readonly可以让子组件无法直接修改，需要调用provide往下传的方法来修改
    provide('name', readonly(name))

    provide('msg', msg)

    provide('changeName', (value) => {
        name.value = value
    })

    const router = useRouter();
    const skipPageC = ()=> {
        router.push({ path: "/pageC", query: { } });
    }

    const skipPageD = ()=> {
        router.push({ path: "/pageD", query: { } });
    }
</script>
