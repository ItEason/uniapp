import type { PageResult, GoodsItem } from './global.d'

export interface goodsList {
  id: string
  title: string
  goodsItems: PageResult<GoodsItem>
}

export interface goods {
  title: string
  id: string
  bannerPicture: string
  subTypes: goodsList[]
}

export type hotParams = { subType: string; pageSize: number; page: number }
