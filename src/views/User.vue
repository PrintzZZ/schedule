<template>
  <div class="user box">
    <!-- 导航 -->
    <van-nav-bar
      title="我的"
    />
  </div>
</template>
<style lang="scss">
@import "@/lib/reset.scss";
  .user{
    // 导航
    .van-nav-bar{
      @include rect(100%,.5rem);
      background-color: rgba(255, 255, 255, 0);
      position: absolute;
      top: 0;
      left: 0;
      .van-nav-bar__title{
        color: rgb(0, 0, 0);
      }
    }
    .van-hairline--bottom::after{
      border: none;
    }
  }
</style>
<script>
import Vue from 'vue'
import { NavBar, Toast, Cell, CellGroup } from 'vant'

Vue.use(NavBar).use(Toast).use(Cell).use(CellGroup)
export default {
  methods: {
  }
}
</script>
