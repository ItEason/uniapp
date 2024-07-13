import type { category } from '@/types/category'
import { request } from '@/utils/http'

/**
 *  获取分类页面数据
 * @returns promise<category>
 */
export const getCategortAPI = () => {
  return request<category[]>({
    url: '/category/top',
    method: 'GET',
  })
}
