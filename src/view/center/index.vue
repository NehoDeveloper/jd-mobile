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
                <i class="iconfont">&#xe604;</i>
                <i class="iconfont">&#xe67a;</i>
            </div>
        </div>
        <m-scroll styles="height:100%;" @scroll="handleScroll">
            <div class="center-view">
                <center-account></center-account>
                <center-order-coupon></center-order-coupon>
                <center-track-activity></center-track-activity>
            </div>
        </m-scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import centerAccount from './index-account'
    import centerOrderCoupon from './index-order-coupon'
    import centerTrackActivity from './index-track-activity'

    export default {
        data () {
            return {
                scroll: {
                    currentY: 0
                },
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
            centerTrackActivity
        },
        methods: {
            handleScroll (e) {
                this.scroll.currentY = e.y;
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
            height: 98px;
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
                    flex-basis: 70px;
                    height: 70px;
                    border-radius: 70px;
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
                    &:not(:first-child) {
                        margin-left: @font-size-small * 2;
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