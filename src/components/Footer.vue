<template>
  <footer class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <span class="iconfont icon-shouye01"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/home" tag="li">
        <span class="iconfont " id="addbtn">
          <span class="btn">+</span>
        </span>
        <!-- <p>添加</p> -->
      </router-link>
      <router-link to="/user" tag="li">
        <span class="iconfont icon-xiaolianmanyifuwu"></span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>
<style lang="scss">
@import '@/lib/reset.scss';
.footer {
    @include rect(100%,0.5rem);
    @include background-color(#ffffff);
    border-top: 1px solid #e4e4e4;
    ul{
      @include rect(100%,100%);
      @include flexbox();
      li{
        position: relative;
        @include flex();
        @include rect(auto,100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        color: #C9C9C9;
        &.router-link-active{
          color:#FFCD54;
        }
        span {
          @include font-size(0.24rem);
          @include margin(-5px 0);
        }
        p {
          @include font-size(0.10rem);
        }
      }
    }
  }
  #addbtn{
      @include rect(0.6rem,0.6rem);
    .btn{
        box-sizing: border-box;
        width: 0.64rem;
        height: 0.64rem;
        background-color: #FFCD54;
        border-radius: 50%;
        position: absolute;
        top: -15px;
        border: 4px solid #fff;
        text-align: center;
        color: #fff;
        font-size: 36px !important;
        font-weight: bolder;
        box-shadow: 0px -1px 2px rgba(34, 34, 34, 0.158);
    }
  }
</style>
