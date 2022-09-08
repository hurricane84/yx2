<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="logo"></div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholoder">搜索商品，共{{total}}款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <!-- 轮播图 -->
    <swiper height="3.7rem" :list="bannerList" class="swiper" @onClick="swiperClick"/>
    <!-- 首页信息 -->
    <!-- 服务信息 -->
    <div class="service-policy" v-if="info && info.commonConfigModule && info.commonConfigModule.brandDescPicUrl">
      <img :src="info.commonConfigModule.brandDescPicUrl" alt=""/>
    </div>
    <!-- 分类 -->
    <ul class="kingkong" v-if="info && info.kingKongAreaV4">
      <li class="kingkong-item" v-for="(item, index) in info.kingKongAreaV4.slice(0, 10)" :key="index">
        <img :src="item.picUrls[0]" alt="">
        <div class="title">{{item.title}}</div>
      </li>
    </ul>
    <!-- banner -->
    <div class="operation-cfg" v-if="info && info.operationRdcCfg && info.operationRdcCfg[0].singleBanner && info.operationRdcCfg[0].singleBanner.banners[0] && info.operationRdcCfg[0].singleBanner.banners[0].picUrl">
          <img :src="info.operationRdcCfg[0].singleBanner.banners[0].picUrl" alt />
    </div>
    <!-- 底部导航菜单 -->
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue'
import Swiper from '@/components/Swiper.vue'

export default {
  data () {
    return {
      total: 0, // 当前商品总数
      bannerList: [
        // 'https://yanxuan.nosdn.127.net/e48cc1f908b359c891bb0152feb9e50e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/9f40ca5a83a06ded9587124432471b67.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/7f762f223c3e320df8260c4b54879124.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/ef739c5f6ba97afbf201ee9d9b3eb16d.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/7d38ac617e6175f468140d326b7ebcda.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        // 'https://yanxuan.nosdn.127.net/e52ad10cfd0f24691c987006ef82a814.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
      ],
      info: {} // 首页信息
    }
  },
  components: { NavFooter, Swiper },
  methods: {
    swiperClick (item) {
      console.log(item)
    },
    async getTotalNums () {
      const total = await this.$axios.get('/getTotalNums')
      // console.log(res.data.data)
      this.total = total
    },
    async getHomeinfo () {
      const res = await this.$axios.get('/home')
      console.log(res)
      this.info = res
      this.bannerList = res.focus.map(item => item.img)
    }
  },
  created () {
    this.getTotalNums()
    this.getHomeinfo()
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.88rem;
  padding: 0 0.3rem;
  align-items: center;
  background-color: $colorA;
  box-sizing: border-box;
  .logo{
    width: 1.38rem;
    height: 0.4rem;
    background-image: url(../assets/img/logo.png);
    background-size: cover;
  }
  .search{
    display: flex;
    flex: 1;
    margin: 0 0.2rem;
    justify-content: center;
    align-content: center;
    border-radius: 0.08rem;
    background: #ededed;
    .icon-sousuo{
      font-size: $fontB;
      color: $colorC;
      margin-right: 0.1rem;
    }
    .placeholder{
      color: $colorF;
      font-size: $fontB;
    }
  }
  .login{
    width: 0.72rem;
    height: 0.38rem;
    font-size: $fontB;
    line-height: 0.38rem;
    text-align: center;
    color: $colorB;
    border: 1px solid $colorB;
    border-radius: 0.08rem;
  }
}
.swiper{
  margin-top: 0.88rem;
}
.kingkong{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  &-item{
    width: 1.1rem;
    height: 1.56rem;
    margin: 0.1rem 0.2rem;
    text-align: center;
    img{
      width: 100%;
    }
    .title{
      color: $colorC;
      font-size: $fontA;
      white-space: nowrap;
    }
  }
}
</style>