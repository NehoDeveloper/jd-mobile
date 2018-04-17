<template>
    <div class="index">
        <div class="index-header">
            <div class="header-scan" @click="goto('/scan')">
                <i class="iconfont">&#xe631;</i>
                <span>扫一扫</span>
            </div>
            <div class="header-search">
                <div class="search-box" @click="goto('/search')">
                    <i class="iconfont">&#xe600;</i>
                    <span>发现品质生活</span>
                </div>
            </div>
            <div class="header-msg">
                <i class="iconfont">&#xe67a;</i>
            </div>
        </div>
        <m-scroll styles="height:100%;">
            <div class="index-view">
                <m-swipe>
                    <m-swipe-item :key="key" v-for="(value,key) in swipeList">
                        <img :src="value.imgUrl" style="width:100%;height: 100%">
                    </m-swipe-item>
                </m-swipe>
            </div>
        </m-scroll>
    </div>
</template>


<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                swipeList:[
                    {
                        imgUrl:require('../../static/images/index-swipe-1.webp')
                    },
                    {
                        imgUrl:require('../../static/images/index-swipe-2.webp')
                    },
                    {
                        imgUrl:require('../../static/images/index-swipe-3.webp')
                    },
                    {
                        imgUrl:require('../../static/images/index-swipe-4.webp')
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../static/less/var';

    .index {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        .index-header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            height: 88px;
            display: flex;
            align-items: center;
            padding: 0 @font-size-small;
            z-index: 10;
            .header-scan {
                flex-basis: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: white;
                i {
                    flex-basis: 50px;
                    font-size: 50px;
                    line-height: 50px;
                }
                span {
                    flex-grow: 0;
                    font-size: @font-size-small;
                }
            }
            .header-search {
                flex: 1;
                display: flex;
                justify-content: center;
                .search-box {
                    display: flex;
                    align-items: center;
                    flex-basis: 90%;
                    height: 58px;
                    border-radius: 29px;
                    background: white;
                    color: #666666;
                    i {
                        flex-basis: 20%;
                        text-align: center;
                        font-size: 40px;
                    }
                    span {
                        flex: 1;
                        font-size: @font-size-big;
                    }
                }
            }
            .header-msg {
                flex-grow: 0;
                display: flex;
                justify-content: flex-end;
                color: white;
                i {
                    font-size: 40px;
                }
            }
        }
        .index-view {
        }
    }
</style>