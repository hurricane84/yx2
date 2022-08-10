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
    <swiper height="3.7rem" :list="bannerList" class="swiper"/>
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
        'https://yanxuan.nosdn.127.net/e48cc1f908b359c891bb0152feb9e50e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/9f40ca5a83a06ded9587124432471b67.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/7f762f223c3e320df8260c4b54879124.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/ef739c5f6ba97afbf201ee9d9b3eb16d.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/7d38ac617e6175f468140d326b7ebcda.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/e52ad10cfd0f24691c987006ef82a814.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
      ]
    }
  },
  components: { NavFooter, Swiper, Swiper },
  async created () {
    const total = await this.$axios.get('/getTotalNums')
    // console.log(res.data.data)
    this.total = total
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
</style>