<template>
  <div class="m-loading">
      <div class="loading-icon"></div>
  </div>
</template>

<style lang="less" scoped>
.m-loading{
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    .loading-icon{
        display: inline-block;
        width:130px;
        height: 130px;
        background: url(../../../../static/images/Spinner-1s-200px.gif);
        background-size: 100% 100%;
    }
}
</style>
