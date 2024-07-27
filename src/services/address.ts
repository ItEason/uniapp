import type { address } from "@/types/address";
import type { AddressItem } from "@/types/goodsDetail";
import { request } from "@/utils/http";

/**
 * 添加收货地址
 * isDefault:是否为默认，1为是，0为否 ，注意：此处按照接口实现
 * @returns promise<address>
 */
export const addressAddAPI = (data: address) => {
  return request({
    url: '/member/address',
    method: 'POST',
    data
  })
}

/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = () => {
  return request<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 获取收货地址详情
 * @param id 地址id(路径参数)
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return request<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 修改收货地址
 * @param id 地址id(路径参数)
 * @param data 表单数据(请求体参数)
 */
export const putMemberAddressByIdAPI = (id: string, data: address) => {
  return request({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}


/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return request({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
