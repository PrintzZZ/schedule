<template>
  <div id="app">
    <router-view/>
    <router-view name='footer'></router-view>
  </div>
</template>

<style lang="scss">
@import "@/lib/reset.scss"; // 引入重置样式，@表示的就是src目录
html,
body,
#app {
  @include rect(100%,100%);
  background-color: #FAFAFA;
}
#app {
  display: flex;
  flex-direction: column;
  .box{
    @include overflow();
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    position: relative;
  }
}
</style>
