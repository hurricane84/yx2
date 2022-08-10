<template>
  <div class="swiper" :style="{height: height}">
    <!-- 图片内容 -->
    <ul class="swiper-slide" :style="slideStyle">
        <li class="swiper-item" v-for="(item, index) in list" :key="index" :style="{width: itemWidth + 'px'}">
            <img :src="item" alt="">
        </li>
    </ul>
    <!-- 分页器内容 -->
    <ul class="swiper-dots" v-if="options.showDots">
        <li class="dots-item" v-for="(item, index) in list" :key="index" :class="{active: nowIndex === index}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideStyle: { width: '15rem' },
      itemWidth: 750, // 单张图片的宽度
      nowIndex: 0 // 当前选中的索引
    }
  },
  props: {
    height: {
      type: String,
      default: '3rem'
    },
    list: {
      type: Array,
      default () {
        return []
      }
    },
    options: {
      type: Object,
      default () {
        return {
          showDots: true, // 是否显示分页器
          interval: 3000, // 轮播间隔时间
          autoplay: true // 是否自动播放
        }
      }
    }
  },
  methods: {
    // 计算slide宽度
    calcWidth () {
      this.$nextTick(() => {
        // 一张图片的宽度
        this.itemWidth = document.body.clientWidth
        const length = this.list.length
        this.slideStyle.width = this.itemWidth * length + 'px'
      })
    }
  },
  mounted () {
    this.calcWidth()
  }
}
</script>

<style lang="scss" scoped>
.swiper{
    position: relative;
    overflow: hidden;
    &-slide{
        height: 100%;
        transition: transform 0.5s ease;
        .swiper-item{
            float: left;
            list-style: none;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    &-dots{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.16rem;
        .dots-item{
            float: left;
            width: 0.4rem;
            height: 0.04rem;
            margin: 0 0.04rem;
            background: $colorA;
            opacity: 0.4;
            &.active{
                opacity: 1;
            }
        }
    }
}
</style>