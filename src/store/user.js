import { defineStore } from 'pinia'

// 写法1
// export const useUserStore = defineStore({
//   id: 'user', // id必填，且需要唯一
//   state: () => {
//     return {
//       name: '雷猴'
//     }
//   },
//   getters: {
//     fullName: (state) => {
//       return '我叫 ' + state.name
//     }
//   },
//   actions: {
//     updateName(name) {
//       this.name = name
//     }
//   }
// })


// 写法2
export const useUserStore = defineStore('user',{
  state: () => {
    return {
      name: 'Pinia'
    }
  },
  getters: {
    fullName: (state) => {
      return '我叫 ' + state.name
    }
  },
  actions: {
    updateName(name) {
      this.name = name
    }
  }
})
