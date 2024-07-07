import type { PageResult } from './global.d'

interface common {
  /** id */
  id: string
}

/**
 * 首页-广告区域数据类型
 */
export interface banner extends common {
  // 跳转链接
  hrefUrl: string
  // 图片链接
  imgUrl: string
  // 跳转类型
  type: string
}

/**
 * 首页-前台类目数据类型
 *
 */
export interface category extends common {
  /**分类名称 */
  name: string
  /**展示图标*/
  icon: string
}

/**
 * 首页-热门推荐
 */
export interface hot extends common {
  /** 推荐说明 */
  alt: string
  /** 图片集合 */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 推荐标题 */
  title: string
  /** 推荐类型 */
  type: string
}

/**
 * 首页-猜你喜欢
 */

export interface likeItem {
  // id
  id: string
  // 商品名称
  name: string
  // 商品描述
  desc: string
  // 商品价格
  price: number
  // 商品图片
  picture: string
  // 商品折扣
  discount: number
  // 商品已下单数量
  orderNum: number
}
