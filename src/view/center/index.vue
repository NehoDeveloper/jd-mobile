<template>
    <div class="center">
        <div :class="headerClasses" :style="{background:headerBackground}">
            <div class="header-left" v-if="headerImgVisible">
                <img src="../../static/images/center-person-logo.png">
            </div>
            <div class="header-title" v-if="headerImgVisible">
                <span>我的</span>
            </div>
            <div class="header-right">
                <i class="iconfont setting" @click="goto('/account')">&#xe604;</i>
                <i class="iconfont msg">&#xe67a;</i>
            </div>
        </div>
        <m-scroll styles="height:100%;" @scroll="handleScroll">
            <div class="center-view">
                <center-account></center-account>
                <center-order-coupon></center-order-coupon>
                <center-track-activity></center-track-activity>
                <center-jd-financial></center-jd-financial>
                <m-floor :options="specialFloorOptions">
                    <m-tab>
                        <m-tab-item active>精选推荐</m-tab-item>
                        <m-tab-item>我的卧室</m-tab-item>
                        <m-tab-item>单车部落</m-tab-item>
                        <m-tab-item>恋上床</m-tab-item>
                        <m-tab-item>办公神器</m-tab-item>
                        <m-tab-item>轮滑滑板</m-tab-item>
                    </m-tab>
                    <div class="view-recommend">
                        <div class="recommend-item" :key="key" v-for="(item, key) in 12">
                            <m-product></m-product>
                        </div>
                    </div>
                </m-floor>
                <m-divider text="我也是有底线的"></m-divider>
            </div>
        </m-scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import centerAccount from './index-account'
    import centerOrderCoupon from './index-order-coupon'
    import centerTrackActivity from './index-track-activity'
    import centerJdFinancial from './index-jd-financial'

    export default {
        data () {
            return {
                scroll: {
                    currentY: 0
                },
                specialFloorOptions: {
                    headerImg: require('../../static/images/floor-special-bg.jpg'),
                    headerLeftText: '更多特色推荐'
                }
            }
        },
        computed: {
            headerClasses () {
                let arrClasses = []
                arrClasses.push('center-header')
                if (this.scroll.currentY < -120)
                    arrClasses.push('border-1px-bottom')
                return arrClasses.join(' ')
            },
            headerBackground () {
                let opacity = 0
                if (this.scroll.currentY < 0) {
                    opacity = parseFloat(Math.abs(this.scroll.currentY) / 120)
                }
                return `RGBA(255,255,255,${opacity})`
            },
            headerImgVisible () {
                if (this.scroll.currentY < -120)
                    return true
            }
        },
        components: {
            centerAccount,
            centerOrderCoupon,
            centerTrackActivity,
            centerJdFinancial
        },
        methods: {
            handleScroll (e) {
                this.scroll.currentY = e.y
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../static/less/var';

    .center {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        .center-header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 88px;
            display: flex;
            align-items: center;
            z-index: 10;
            .header-left {
                position: absolute;
                top: 0;
                left: @font-size-small;
                height: 100%;
                display: flex;
                align-items: center;
                img {
                    flex-basis: 60px;
                    height: 60px;
                    border-radius: 30px;
                }
            }
            .header-title {
                flex: 1;
                display: flex;
                justify-items: center;
                justify-content: center;
                span {
                    font-size: @font-size-big;
                }
            }
            .header-right {
                position: absolute;
                top: 0;
                right: @font-size-small;
                height: 100%;
                display: flex;
                align-items: center;
                i {
                    color: white;
                    font-size: 40px;
                    &:not(:first-child) {
                        margin-left: @font-size-small * 2;
                    }
                }
            }
        }
        .center-view {
            .view-recommend {
                display: flex;
                flex-wrap: wrap;
                .recommend-item {
                    flex-basis: calc(~"50% - @{font-size-small} / 2");
                    flex-grow: 0;
                    &:nth-child(2n + 1) {
                        margin: 0 @font-size-small / 2 @font-size-small 0;
                    }
                    &:nth-child(2n) {
                        margin: 0 0 @font-size-small @font-size-small / 2;
                    }
                }
            }
        }
        .border-1px-bottom {
            .header-right {
                i {
                    color: #666666;
                }
            }
        }
    }
</style>