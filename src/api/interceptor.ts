import Taro from '@tarojs/taro'
import { base, HTTP_STATUS } from './config'
import { logError } from '../utils/index'

const token:string = ''
interface baseOption {
  isShowLoading: boolean,
  loadingText: string,
  url: string,
  data: any,
  method: any,
  header: { 'content-type': string, 'token': string },
  success: any
  error: any
}
interface getOption {
  url:string,
  data?:any,
  baseUrl?:'string'
}
interface postOption extends getOption {
  contentType?:string
}


export default {
  baseOptions(params:any, method:string = 'GET') {
    let { url, data } = params
    // let token = getApp().globalData.token
    // if (!token) login()
    console.log('params', params)
    let contentType = 'application/x-www-form-urlencoded'
    contentType = params.contentType || contentType
    const option: baseOption = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: base + url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': token },
      success(res) {
        console.log('success',res)
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
          return logError('api', '请求资源不存在')
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
          return logError('api', '服务端出现了问题')
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
          return logError('api', '没有权限访问')
        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
          return res.data
        }
      },
      error(e) {
        logError('api', '请求接口出现问题', e)
      }
    }
    return Taro.request(option)
  },
  // get(url:string, data:any = '',baseUrl?:'string') {
  //   let option = { url, data, baseUrl }
  //   return this.baseOptions(option,'GET')
  // },
  // post: function (url:string, data:any, contentType?:string, baseUrl?:'string') {
  //   let params = { url, data, contentType, baseUrl }
  //   return this.baseOptions(params, 'POST')
  // },
  get(option: getOption) {
    return this.baseOptions(option,'GET')
  },
  post: function (option: postOption) {
    return this.baseOptions(option, 'POST')
  }
}
