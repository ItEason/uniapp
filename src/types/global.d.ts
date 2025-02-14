/** 通用分页结果类型 */
export type PageResult<T> = {
  /** 列表数据 */
  items: T[]
  /** 总条数 */
  counts: number
  /** 当前页数 */
  page: number
  /** 总页数 */
  pages: number
  /** 每页条数 */
  pageSize: number
}

/** 通用分页参数类型 */
export type PageParams = {
  /** 页码：默认值为 1 */
  page?: number
  /** 页大小：默认值为 10 */
  pageSize?: number
}

/** 通用商品结果类型 */
export interface GoodsItem {
  /** 商品描述 */
  desc: string
  /** 商品id */
  id: string
  /** 商品名 */
  name: string
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
  /** 商品折扣 */
  discount?: number
  /** 数量 */
  orderNum?: number
}

/** 通用地址类型 */
export interface addressCode {
  // 省份编码
  provinceCode: string | null
  // 城市编码
  cityCode: string | null
  //区 / 县编码
  countyCode: string | null
}
