<template>
  <div class="nav">
    <router-link to="/" class="nav-item">
        <i class="iconfont icon-shouye"></i>
        <div>首页</div>
    </router-link>
    <router-link to="/category" class="nav-item">
        <i class="iconfont icon-icon"></i>
        <div>分类</div>
    </router-link>
    <router-link to="/cart" class="nav-item">
        <i class="iconfont icon-shouye1"></i>
        <div>购物车</div>
    </router-link>
    <router-link to="/profile" class="nav-item">
        <i class="iconfont icon-geren"></i>
        <div>个人</div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.97rem;
  line-height: 1.4;
  background-color: $colorA;
  border: 1px solid #d9d9d9;
  &-item{
    flex: 1;
    text-align: center;
    outline: none;
    div{
        color: $colorF;
    }
    .iconfont{
        font-size: $fontD;
        color: $colorF;
    }
  }
  .router-link-exact-active{
    div{
        color: $colorB;
    }
    &:active{
        -webkit-tap-highlight-color: transparent;
    }
    .iconfont{
        color: $colorB;
    }
  }
}
</style>