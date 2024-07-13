<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image lazy-load :src="hotData?.bannerPicture"> </image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: curSubTypeIndex === index }"
        @tap.prevent="changeSubTypeIndex(index)"
      >
        {{ item.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      :scroll-top="scrollTop"
      @scroll="scrolling"
      :refresher-triggered="isTriggered"
      @refresherrefresh="onRefresherrefresh"
      lower-threshold="70"
      refresher-enabled
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in curGoodsData"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ isEnd ? '没有更多数据了....' : '正在加载...' }}</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHotDataAPI } from '@/services/hot'
import type { goods, goodsList, hotParams } from '@/types/hot'
import type { PageResult, GoodsItem } from '@/types/global'
import { ref } from 'vue'

type map = { type: string; title: string; url: string }

// 热门推荐页 标题和url
const hotMap: map[] = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
// 热门数据
const hotData = ref<goods>()
// subTypes数据
const subTypes = ref<goodsList[]>([])
// 当前 subType 数据
const curSubType = ref<goodsList>()
// 当前GoodsItems数据
const curGoodsItems = ref<PageResult<GoodsItem>>()
// 当前GoodsData数据、商品数据
const curGoodsData = ref<GoodsItem[]>([])
// 当前subType高亮index
const curSubTypeIndex = ref<number>(0)
// 默认请求参数
const params = ref<hotParams>({ subType: '', page: 1, pageSize: 10 })
// 当前热门推荐页 标题和url
const curHot = ref<map>({ type: '1', title: '特惠推荐', url: '/hot/preference' })
// 控制 scroll-view下拉刷新是否关闭变量
const isTriggered = ref<boolean>(false)
// scroll-view 滚动变量，控制是否返回顶部
const scrollTop = ref<number>(100)
// 控制当前 subType 数据是否为最后一页
const isEnd = ref<boolean>(false)
/**
 *  调用接口并默认选择第一个subType下的数据
 * @param url
 */
const getHostData = async (url: string, params?: hotParams) => {
  isTriggered.value = true
  const res = await getHotDataAPI(url, params)
  hotData.value = res.result
  subTypes.value = hotData.value.subTypes
  curSubType.value = subTypes.value[curSubTypeIndex.value]
  curGoodsItems.value = curSubType.value.goodsItems
  curGoodsData.value = curGoodsItems.value.items
  isTriggered.value = false
}

/**
 *  监听scroll-view滚动的top
 * @param e
 */
const scrolling = (e: UniHelper.ScrollViewOnScrollEvent) => {
  scrollTop.value = e.target!.scrollTop
}

/**
 * 切换SubType 默认index为0
 */
const changeSubTypeIndex = (index: number = 0) => {
  scrollTop.value = 0
  curSubTypeIndex.value = index
  curSubType.value = subTypes.value[curSubTypeIndex.value]
  curGoodsItems.value = curSubType.value.goodsItems
  curGoodsData.value = curGoodsItems.value.items
  params.value = { subType: '', page: 1, pageSize: 10 }
}

/**
 * scroll-view上拉刷新触发的方法
 */
const onRefresherrefresh = () => {
  uni.showToast({
    title: '数据加载中',
    icon: 'loading',
    duration: 1500,
  })
  params.value = { subType: '', pageSize: 10, page: 1 }
  // 发起对应请求
  getHostData(curHot.value!.url, params.value)
}

/**
 * scroll-view滑动底部触发的方法
 */
const onScrolltolower = async () => {
  uni.showToast({
    title: '数据加载中',
    icon: 'loading',
    duration: 1500,
  })
  if (curGoodsItems.value && curGoodsItems.value?.page < curGoodsItems.value?.pages) {
    curGoodsItems.value.page++
    params.value = { subType: curSubType.value!.id, page: curGoodsItems.value.page, pageSize: 10 }

    const res = await getHotDataAPI(curHot.value.url, params.value)

    curGoodsData.value = [
      ...curGoodsData.value,
      ...res.result.subTypes[curSubTypeIndex.value].goodsItems.items,
    ]
  } else {
    isEnd.value = true
    return
  }
}

onLoad((options) => {
  // 获取url中的type属性
  const type: string = options!.type
  // 寻找当前页面需要展示的title
  curHot.value = hotMap.find((item) => item.type === type)!
  // 动态设置页面状态栏title
  uni.setNavigationBarTitle({
    title: curHot.value!.title,
  })
  params.value = { subType: '', pageSize: 10, page: 1 }
  // 发起对应请求
  getHostData(curHot.value.url, params.value)
})
</script>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}

.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

.scroll-view {
  flex: 1;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;

  .text {
    margin: 0 20rpx;
    position: relative;
  }

  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;

  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  .thumb {
    width: 305rpx;
    height: 305rpx;
  }

  .name {
    height: 88rpx;
    font-size: 26rpx;
  }

  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }

  .symbol {
    font-size: 70%;
  }

  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
F
