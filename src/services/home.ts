import { request } from '@/utils/http'
import type { banner, category, hot, likeItem } from '@/types/home'
import type { PageResult, PageParams } from '@/types/global.d'

/**
 * 获取首页-广告区域
 * @param distributionSite 1:banner 2:商品列表
 * @returns promise<banner[]>
 */
export const getHomeBannerAPI = (distributionSite: number = 1) => {
  return request<banner[]>({
    url: '/home/banner',
    method: 'GET',
    data: { distributionSite },
  })
}

/**
 * 首页-前台分类
 * @returns  promise<category[]>
 */
export const getHomeCategoryAPI = () => {
  return request<category[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

/**
 * 首页-热门推荐
 * @returns  promise<hot[]>
 */
export const getHomeHotAPI = () => {
  return request<hot[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}

/**
 * 首页-猜你喜欢
 * @returns  promise<hot[]>
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams, isShowMadal?: boolean) => {
  return request<PageResult<likeItem>>(
    {
      url: '/home/goods/guessLike',
      method: 'GET',
      data,
    },
    isShowMadal,
  )
}
