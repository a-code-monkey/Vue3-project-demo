<template>
    <div>
        <p>pageA name is:  {{ form.name }}</p>
        <p>pageA count is:  {{ count }}</p> <!-- 无需 .value -->
        <p>{{  state.flag }}</p>
        <p>{{ publishedBooksMessage }}</p>
        <p>{{ fullName }}</p>
        <p>
            Ask a yes/no question:
            <input v-model="question" />
        </p>
        <p>answer is: {{ answer }}</p>   
        <p>{{ `${x} --- ${y}` }}</p>  
        <p>{{ `${x} --- ${y}` }}</p>
        <p>{{ `${x} --- ${y}` }}</p>

        <Child ref="child" />   
        <el-row class="mb-4">
            <el-button @click="increment">Default</el-button>
            <el-button type="primary" @click="addX">Primary</el-button>
            <el-button type="success" @click="changeForm">Success</el-button>
            <el-button type="info" @click="changeId">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>
    </div>
</template>
<script setup>
    import { ref, reactive, nextTick, toRefs, computed, onMounted, watch, watchEffect } from 'vue'
    import Child from './child.vue'

    // 响应式状态
    const count = ref(0)
    const state = reactive({
        flag: false, 
        form: { name: 'vue' },
        arr: [ 'foo', 'bar' ],
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ] 
    })

    const { form, arr } = toRefs(state);

    // 一个计算属性 ref
    const publishedBooksMessage = computed(() => {
        return state.books.length > 0 ? 'Yes' : 'No'
    })

    const firstName = ref('John')
    const lastName = ref('Doe')

    const fullName = computed({
        // getter
        get() {
            return firstName.value + ' ' + lastName.value
        },
        // setter
        set(newValue) {
            // 注意：我们这里使用的是解构赋值语法
            [firstName.value, lastName.value] = newValue.split(' ')
        }
    })

    const selected = ref('A')
    const options = ref([
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
    ])

    const question = ref('')
    const answer = ref('Questions usually contain a question mark. ;-)')

    // 可以直接侦听一个 ref
    watch(question, async (newQuestion, oldQuestion) => {
        if (newQuestion.indexOf('?') > -1) {
            answer.value = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                console.log(res);
                answer.value = (await res.json()).answer
            } catch (error) {
                answer.value = 'Error! Could not reach the API. ' + error
            }
        }
    })

    const x = ref(0)
    const y = ref(0)

    // 单个 ref
    watch(x, (newX) => {
        console.log(`x is ${newX}`)
    })

    // getter 函数
    watch(
        () => x.value + y.value,
        (sum) => {
            console.log(`sum of x + y is: ${sum}`)
        }
    )

    // 多个来源组成的数组
    watch([x, () => y.value], ([newX, newY]) => {
        console.log(`x is ${newX} and y is ${newY}`)
    })

    const addX = () => {
        x.value++
    }

    watch(
        () => state.form,
        (newValue, oldValue) => {
            // 注意：`newValue` 此处和 `oldValue` 是相等的
            // *除非* state.someObject 被整个替换了
            console.log(newValue, oldValue);
        },
        { deep: true }
    )

    watch(
        () => state.form, 
        (newValue, oldValue) => {
            // 立即执行，且当 `source` 改变时再次执行
            console.log(newValue, oldValue);
        }, 
        { immediate: true }
    )

    const todoId = ref(1)
    const data = ref(null)

    watch(todoId, async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
            )
            data.value = await response.json()
        }, 
        { immediate: true }
    )

    watchEffect(async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
        )
        data.value = await response.json()
    })

    const changeId = () => {
        todoId.value++;
    }

    const changeForm = () => {
        state.form.name = 'hello vue';
    }

    const child = ref(null)

    // 用来修改状态、触发更新的函数
    function increment() {
        count.value++
        nextTick(() => {
            // 访问更新后的 DOM
        })
    }

    //组件基础


    // 生命周期钩子
    onMounted(() => {
        console.log('count----', count);
        console.log('child----', child.value);
        console.log(`The initial count is ${count.value}.`)
    })
</script>