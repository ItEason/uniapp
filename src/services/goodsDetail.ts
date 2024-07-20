import type { GoodsResult } from "@/types/goodsDetail";
import { request } from "@/utils/http";

export const getGoodsDetailAPI = (id: string) => {
  return request<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: {
      id
    }
  })
}
