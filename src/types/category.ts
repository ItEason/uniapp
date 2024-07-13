import type { GoodsItem } from './global'

interface commom {
  id: string
  name: string
  picture: string
}

export interface categoryItem extends commom {
  parentId: string
  parentName: string
  goods: GoodsItem[]
}

export interface category extends commom {
  imageBanners: string[]
  children: categoryItem[]
}
