<!--
此文件为开发者工具生成，生成时间: 2024/7/13下午6:01:05
使用方法：
在 E:\项目\heima-shop\dist\dev\mp-weixin\pages\category\category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 E:\项目\heima-shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="categories categories">
    <scroll-view scroll-y="true" class="primary primary">
      <view class="item active sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-390 sk-text">居家</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-507 sk-text">美食</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-208 sk-text">服饰</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-41 sk-text">母婴</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-267 sk-text">个护</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-452 sk-text">严选</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-824 sk-text">数码</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-248 sk-text">运动</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-766 sk-text">杂项</text>
      </view>
    </scroll-view>
    <scroll-view scroll-y="true" class="secondary secondary">
      <view is="components/CmSwiper" class="banner banner">
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
              <navigator
                class="navigator CmSwiper--navigator"
                hover-class="none"
                open-type="switchTab"
              >
                <image class="image CmSwiper--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(100%, 0px) translateZ(0px);
              "
            >
              <navigator
                class="navigator CmSwiper--navigator"
                hover-class="none"
                open-type="switchTab"
              >
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
      <view class="panel panel">
        <view class="title title">
          <text class="name sk-transparent sk-text-27-4194-26 sk-text">居家生活用品</text>
          <navigator
            class="more sk-transparent sk-text-30-6452-621 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >全部</navigator
          >
        </view>
        <view class="section section">
          <navigator class="goods goods" hover-class="none">
            <image class="image sk-image" lazy-load="true"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-226 sk-text"
              >钻石陶瓷涂层多用锅18cm 小奶锅</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-547 sk-text">149.00</text>
            </view>
          </navigator>
          <navigator class="goods goods" hover-class="none">
            <image class="image sk-image" lazy-load="true"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-964 sk-text"
              >极光限定 珠光蓝珐琅锅</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-685 sk-text">199.00</text>
            </view>
          </navigator>
        </view>
      </view>
      <view class="panel panel">
        <view class="title title">
          <text class="name sk-transparent sk-text-27-4194-729 sk-text">收纳</text>
          <navigator
            class="more sk-transparent sk-text-30-6452-590 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >全部</navigator
          >
        </view>
        <view class="section section">
          <navigator class="goods goods" hover-class="none">
            <image class="image sk-image" lazy-load="true"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-113 sk-text"
              >给衣柜减减肥，真空防潮压缩袋</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-833 sk-text">79.00</text>
            </view>
          </navigator>
          <navigator class="goods goods" hover-class="none">
            <image class="image sk-image" lazy-load="true"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-116 sk-text"
              >爆款明星好物，抽屉式透明储物柜</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-581 sk-text">129.00</text>
            </view>
          </navigator>
          <navigator class="goods goods" hover-class="none">
            <image class="image sk-image" lazy-load="true"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-574 sk-text"
              >衣柜省空间神器，棉麻涤·收纳挂袋</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-652 sk-text">55.00</text>
            </view>
          </navigator>
          <navigator class="goods goods" hover-class="none">
            <image class="image sk-image" lazy-load="true"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-735 sk-text"
              >换季好帮手，大容量防尘衣物收纳袋</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-312 sk-text">69.00</text>
            </view>
          </navigator>
          <navigator class="goods goods" hover-class="none">
            <image class="image sk-image" lazy-load="true"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-269 sk-text"
              >可水洗的布艺收纳盒</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-220 sk-text">29.90</text>
            </view>
          </navigator>
          <navigator class="goods goods" hover-class="none">
            <image class="image sk-image" lazy-load="true"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-760 sk-text"
              >开发员自留款，带滚轮双层脏衣篓</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-664 sk-text">125.00</text>
            </view>
          </navigator>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2024/7/13下午6:01:05

在 E:\项目\heima-shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-540 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-390 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-507 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-208 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-41 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-267 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-452 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-824 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-248 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-766 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-27-4194-26 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #eeeeee 0%,
    #eeeeee 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}

.sk-text-30-6452-621 {
  background-image: linear-gradient(
    transparent 30.6452%,
    #eeeeee 0%,
    #eeeeee 69.3548%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-226 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-547 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-964 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-685 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-27-4194-729 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #eeeeee 0%,
    #eeeeee 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}

.sk-text-30-6452-590 {
  background-image: linear-gradient(
    transparent 30.6452%,
    #eeeeee 0%,
    #eeeeee 69.3548%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-113 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-833 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-116 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-581 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-574 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-652 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-735 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-312 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-269 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-220 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-760 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}

.sk-text-14-2857-664 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
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
