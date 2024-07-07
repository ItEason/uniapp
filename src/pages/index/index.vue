<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <scroll-view
    refresher-enabled="true"
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    scroll-y
    class="swiper-view"
  >
    <PageSkeleton v-if="isLoading" />
    <block v-else>
      <!-- 自定义轮播图 -->
      <CmSwiper :list="bannerList" />
      <!-- 自定义分类栏 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <CmGuess :page="currentPage" v-if="!isRefresh" />
    </block>
  </scroll-view>
</template>

<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'

import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { banner, category, hot } from '@/types/home'

const bannerList = ref<banner[]>([])
const categoryList = ref<category[]>([])
const hotList = ref<hot[]>([])
const isTriggered = ref<boolean>(false)
// 猜你喜欢当前页数
const currentPage = ref<number>(1)
// 是否刷新重置
const isRefresh = ref<boolean>(false)
// 数据是否加载中
const isLoading = ref<boolean>(false)

const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  isRefresh.value = true
  currentPage.value = 1
  isLoading.value = true
  // 加载数据
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  // 关闭数据
  isTriggered.value = false
  isRefresh.value = false
  isLoading.value = false
}
//
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

const onScrolltolower = () => {
  currentPage.value = currentPage.value + 1
}

// 页面加载时调用
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>
<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.swiper-view {
  flex: 1;
}
</style>
