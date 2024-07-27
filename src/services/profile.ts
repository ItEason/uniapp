import type { profile, profileParams } from "@/types/profile"
import { request } from "@/utils/http"


/**
 *  获取个人信息
 * @returns promise
 */
export const getMemberProfileAPI = () => {
  return request<profile>({
    url: '/member/profile',
    method: 'GET'
  })
}


/**
 *  修改个人信息
 * @returns promise
 */
type token = string
export const putMemberProfileAPI = (data: profileParams) => {
  return request<profile & token>({
    url: '/member/profile',
    method: 'PUT',
    data
  })
}
