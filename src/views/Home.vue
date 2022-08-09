<template>
  <div>
    <div class="header">
      <div class="logo"></div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholoder">搜索商品，共{{total}}款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue'
export default {
  data () {
    return {
      total: 0 // 当前商品总数
    }
  },
  components: { NavFooter }
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
</style>