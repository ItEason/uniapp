import { request } from '@/utils/http'
import type { goods, hotParams } from '@/types/hot'

/**
 *  根据传递的url发起对应的请求
 * @param url
 * @returns promise<goods>
 */
export const getHotDataAPI = (url: string, params?: hotParams) => {
  return request<goods>({
    url: url,
    method: 'GET',
    data: params,
  })
}
