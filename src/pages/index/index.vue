<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />

  <scroll-view scroll-y class="swiper-view">
    <!-- 自定义轮播图 -->
    <CmSwiper :list="bannerList" />
    <!-- 自定义分类栏 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <CmGuess />
  </scroll-view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { banner, category, hot } from '@/types/home'

const memberStore = useMemberStore()
const bannerList = ref<banner[]>([])
const categoryList = ref<category[]>([])
const hotList = ref<hot[]>([])
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

// 页面加载时调用
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
const saveProfile = () => {
  memberStore.setProfile({
    token: '1111',
    name: '2222',
  })
}
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
