import { observable } from 'mobx'


const globalStore = observable({
  taroEnv: process.env.TARO_ENV || '',

})


export default globalStore
