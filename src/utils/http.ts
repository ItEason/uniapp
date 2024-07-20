/**
 * 添加拦截器
 *  拦截 request 请求
 *  拦截 uploadFile 文件上传
 * TODO:
 *  1. 非 http 开头无需拼接地址
 *  2. 请求超时
 *  3. 添加小程序端请求头标识
 *  4.添加 token 请求头标识
 */

import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpIntercepter = {
  // 拦截前触发
  invoke(option: UniApp.RequestOptions) {
    // 1.非http开头需拼接地址
    if (!option.url.startsWith('http')) {
      option.url = baseUrl + option.url
    }
    // 请求超时时间，默认60s
    option.timeout = 10000
    // 添加小程序端请求头
    option.header = {
      ...option.header,
      'source-client': 'miniapp',
    }
    // 添加token
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token

    if (token) {
      option.header['Authorization'] = token
    }
  },
}

uni.addInterceptor('request', httpIntercepter)
uni.addInterceptor('uploadFile', httpIntercepter)

/**
 * 请求函数
 * @param UniApp.Requestoptions
 * @returns Promise
 * 1.返回 Promise 对象
 * 2.请求成功
 *  2.1 提取核心数据 res.data
 *  2.2 添加泛型，支持泛型
 * 3.请求失败
 *  3.1 网络错误 -> 提示用户换网络
 *  3.2 401错误  -> 清除用户信息，跳转登录页面
 *  3.3 其他错误 -> 根据后端错误信息轻提醒
 */
interface Data<T> {
  code: string
  msg: string
  result: T
}

export const request = <T>(options: UniApp.RequestOptions, isShowToast: boolean = false, duration: number = 1500) => {
  // 1. 返回promise对象
  return new Promise<Data<T>>((resolve, reject) => {
    if (isShowToast) {
      uni.showToast({
        icon: 'loading',
        mask: true,
        title: '数据加载中',
        duration
      })
    }
    uni.request({
      ...options,
      // 2.请求成功
      success(res) {
        // 状态码 2xx， axios 设计原理
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          // 清空用户登录信息
          memberStore.clearProfile()
          // 跳转到登录页面
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).msg,
            mask: true,
            icon: 'none',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络异常',
          mask: true,
        })
        reject(err)
      },
    })
  })
}
