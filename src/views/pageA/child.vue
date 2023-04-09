<template>
  <div>
    <el-dialog title="子组件" v-model="visible" width="800px" append-to-body draggable>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Password" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="Age" prop="age">
          <el-input v-model.number="ruleForm.age" />
        </el-form-item>
        <el-form-item label="" prop="">
          <h4>{{ msg }}</h4>
          <button @click="handleClick">子通父</button>
        </el-form-item> 
        <el-form-item label="">
          <div>Non-Props is: {{ $attrs.t }}</div> 
        </el-form-item>       
        <el-form-item>
          <!-- 默认插槽 -->
          <slot></slot> 
        </el-form-item>
        <el-form-item>
          <!-- 具名插槽 name -->
          <slot name="other-tech"></slot>
        </el-form-item>
      </el-form>


      <div class="dialog-footer">
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
        <el-button @click="visible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
  import { ref,reactive,toRefs } from 'vue'
  
  const state = reactive({
    ruleForm: {
      pass: '',
      checkPass: '',
      age: '',
    },
    rules: {}
  })

  const { ruleForm, rules } = toRefs(state);

  const props = defineProps({
    id: {
      type: [Number, String]
    },
    msg: {
      type: String,
      default: ''
    }    
  });
  const emit = defineEmits(["ok","changeMsg"]);

  const a = 1;
  const b = ref(2);
  const visible = ref(false);  
  // 像 defineExpose 这样的编译器宏不需要导入
  defineExpose({
    a,
    b,
    show
  })

  const handleConfirm = () => {
    emit('ok', true)
  } 
  function handleClick() {
    // 参数1：事件名
    // 参数2：传给父组件的值
    emit('changeMsg', 'edf')
  }  
  
  // 显示弹框
  function show() {
    console.log('show------', props.id);
    visible.value = true;
  }


</script>
