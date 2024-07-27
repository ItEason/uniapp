import type { addressCode } from "./global"

export type Gender = '男' | '女'

export interface profile {
  // 用户Id
  id: string
  // 头像
  avatar: string
  // 昵称
  nickname: string
  // 账号名称
  account: string
  // 性别，男、女、未知
  gender: Gender | null
  //生日
  birthday: string | null
  // 省市区的名称：如山东省济南市里历下区
  fullLocation: string
  // 职业
  profession: string | null
}

export interface profileParams extends addressCode {
  // 昵称
  nickname: string
  // 性别，男、女、未知
  gender: Gender | null
  //生日
  birthday: string | null
  // 职业
  profession: string | null
}
