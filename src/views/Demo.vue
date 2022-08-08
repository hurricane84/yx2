<template>
  <div>
    <div class="dialog">
        <div class="dialog-title">标题</div>
        <div class="dialog-content">内容</div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@mixin wyy(){
    width: 200px;
    height: 200px;
}
.dialog{
    // width: 200px;
    // height: 200px;
    @include wyy();
    background: $colorB;
    &-title{
        color: #fff;
    }
}
@function style($arg){
    @if($arg == 1){
        @return #000;
    }
    @else if($arg == 2){
        @return #fff;
    }
    @else{
        @return #ccc;
    }
}
.box{
    background: style(5);
}
// eslint-disable-next-line eol-last
</style>