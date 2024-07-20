import { request } from "@/utils/http";
import type { loginParam, loginResult } from "@/types/login"

/**
 * 小程序登录
 *
 * @returns promise
 */
export const postLoginWxMinAPI = (data: loginParam) => {
  return request<loginResult>({
    url: '/login/wxMin',
    method: 'POST',
    data
  })
}


/**
 * 小程序登录-内测版
 * @returns promise
 */
export const postLoginWxMinSimpleAPI = (data: { phoneNumber: string }) => {
  return request<loginResult>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data
  })
}
