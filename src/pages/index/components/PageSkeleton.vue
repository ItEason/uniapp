<template name="skeleton">
  <view is="components/CmSwiper">
    <view class="carousel CmSwiper--carousel">
      <swiper circular="true" current="0" interval="3000" autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator class="navigator CmSwiper--navigator" hover-class="none" open-type="switchTab">
            <image class="image CmSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator CmSwiper--indicator">
        <text class="dot CmSwiper--dot active CmSwiper--active"></text>
        <text class="dot CmSwiper--dot"></text>
        <text class="dot CmSwiper--dot"></text>
        <text class="dot CmSwiper--dot"></text>
        <text class="dot CmSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-307 sk-text"
          >居家</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-133 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-493 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-770 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-59 sk-text">个护</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-62 sk-text">严选</text>
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-179 sk-text"
          >数码</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-851 sk-text"
          >运动</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-254 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
        open-type="switchTab"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-965 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-610 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-902 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none" open-type="navigate">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-529 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-418 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none" open-type="navigate">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-825 sk-text"
            >一站买全</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-633 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none" open-type="navigate">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-317 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-347 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none" open-type="navigate">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/CmGuess">
    <view class="caption CmGuess--caption">
      <text
        class="text CmGuess--text sk-transparent sk-text-0-0000-384 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-5714-362 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-948 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}

.sk-text-14-2857-307 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-133 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-493 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-770 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-59 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-62 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-179 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-851 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-254 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-965 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-610 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-902 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-529 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-418 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-825 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-633 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-317 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-347 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-0-0000-384 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
