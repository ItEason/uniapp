import type { addressCode } from "./global"

export interface address extends addressCode {
  // 收货人姓名
  receiver: string
  // 联系方式
  contact: string
  // 详细地址
  address: string
  // 是否为默认地址，1为是，0为否
  isDefault: number
}

