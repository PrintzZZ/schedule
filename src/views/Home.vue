<template>
  <div class="home box">
    <!-- 导航 -->
    <van-nav-bar
      title="首页"
    />
    <!-- 头部 -->
    <div class="home-bar">
      <p class="datet-tip">今天是</p>
      <p class="date-info">2020年6月7日</p>
      <div class="mission-box">
        <p class="mission-finish">已完成3件任务</p>
        <p class="mission-pending">待完成4件任务</p>
      </div>
    </div>
    <!-- 金刚区 -->
    <div class="list-box">
      <div class="list"></div>
    </div>
    <!-- 任务列表 -->
    <div class="mission-list">
      <div class="mission-list-box">
        <p class="mission-list-title-info">
          <span class="mission-list-title-date">今天</span>
          周日 06.2020
        </p>
        <van-cell-group>
          <van-cell title="词汇 3-2" value="未完成" />
          <van-cell title="公式 二" value="已完成" label="已经复习3次" />
          <van-cell title="知识点 二" value="已完成" label="已经复习1次" />
        </van-cell-group>
      </div>
      <div class="mission-list-box">
        <p class="mission-list-title-info">
          <span class="mission-list-title-date">06日</span>
          周六 06.2020
        </p>
        <van-cell-group>
          <van-cell title="词汇 3-2" value="未完成" />
          <van-cell title="公式 二" value="已完成" label="已经复习3次" />
          <van-cell title="知识点 二" value="已完成" label="已经复习1次" />
        </van-cell-group>
      </div>
      <div class="mission-list-box">
        <p class="mission-list-title-info">
          <span class="mission-list-title-date">05日</span>
          周五 06.2020
        </p>
        <van-cell-group>
          <van-cell title="词汇 3-2" value="未完成" />
          <van-cell title="公式 二" value="已完成" label="已经复习3次" />
          <van-cell title="知识点 二" value="已完成" label="已经复习1次" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/lib/reset.scss";
  .home{
    // 导航
    .van-nav-bar{
      @include rect(100%,.5rem);
      background-color: rgba(255, 255, 255, 0);
      position: absolute;
      top: 0;
      left: 0;
      .van-nav-bar__title{
        color: #fff;
      }
    }
    .van-hairline--bottom::after{
      border: none;
    }
    // 头部
    .home-bar{
      @include rect(100%,2rem);
      background-image: url('.././assets/home-header.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-color: yellow;
      box-sizing: border-box;
      padding: .1rem;
      color: #fff;
      .datet-tip{
        margin-top: .5rem;
        font-size: 12px;
      }
      .date-info{
        font-size: 27px;
      }
      .mission-box{
        @include rect(100%,auto);
        display: flex;
        font-size: 16px;
        margin: 25px 0;
        .mission-finish{
          @include rect(50%,auto);
        }
        .mission-pending{
          @include rect(50%,auto);
        }
      }
    }
    // 金刚区
    .list-box{
      @include rect(100%,.8rem);
      position: relative;
      background-color: #fff;
    }
    .list{
      @include rect(90%, 1rem);
      box-sizing: border-box;
      margin: 0 5%;
      background-color: red;
      position: relative;
      top: -.3rem;
      left: 0;
      background-color: #fff;
      box-shadow: 1px 1px 5px rgba(34, 34, 34, 0.288);
      border-radius: 10px;
    }
    // 任务列表
    .mission-list{
      @include rect(100%,auto);
      margin-top: 0rem;
      .mission-list-box{
        padding: .1rem 5%;
        margin-bottom: 10px;
        background-color: #fff;
      }
      .van-hairline--top-bottom::after{
        border:none;
      }
      .mission-list-title-info{
        font-size: 12px;
        color: #6c6c6c;
        .mission-list-title-date{
          color: #292929;
          font-size: 18px;
          font-family: "Microsoft Yahei";
          font-weight: bolder;
          margin-right: 5px;
        }
      }
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
