import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, './src')
    },    
    //  [
    //   {
    //     find: "@",
    //     replacement: path.resolve(__dirname,'/src')
    //     //为 /src配置别名@
    //   },
    //   // 可以专门为组件文件路径设置别名
    //   {
    //     find: "C",
    //     replacement: path.resolve(__dirname,'/src/components')
    //   }
    // ]
  }  
})
