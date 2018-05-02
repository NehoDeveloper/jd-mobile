<template>
    <div class="login-header">
        <div class="header-left" @click="back">
            <i class="iconfont">&#xe602;</i>
        </div>
        <div class="header-mid">
            <span>用户登陆</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../../static/less/var';
    .login-header{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 88px;
        display: flex;
        .header-left{
            position: absolute;
            top:0;
            left:@font-size-small;
            height: 100%;
            display: flex;
            align-items: center;
        }
        .header-mid{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                font-size: @font-size-big;
            }
        }
    }
</style>