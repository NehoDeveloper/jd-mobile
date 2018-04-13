<template>
    <div class="center-order-coupon">
        <div class="center-order border-1px-bottom">
            <div class="order-left border-1px-right">
                <div class="left-item">
                    <i class="iconfont">&#xe606;</i>
                    <span>待付款</span>
                </div>
                <div class="left-item">
                    <i class="iconfont">&#xe605;</i>
                    <span>待收货</span>
                </div>
                <div class="left-item">
                    <i class="iconfont">&#xe61e;</i>
                    <span>待评价</span>
                </div>
                <div class="left-item">
                    <i class="iconfont">&#xe625;</i>
                    <span>售后/服务</span>
                </div>
            </div>
            <div class="order-right">
                <i class="iconfont">&#xe607;</i>
                <span>我的订单</span>
            </div>
        </div>
        <div class="center-coupon">
            <div class="order-left border-1px-right">
                <div class="left-item">
                    <label>3498</label>
                    <span>京豆</span>
                </div>
                <div class="left-item">
                    <label>3</label>
                    <span>优惠券</span>
                </div>
                <div class="left-item">
                    <label>34</label>
                    <span>白条</span>
                </div>
                <div class="left-item">
                    <label>5298</label>
                    <span>京东小金库</span>
                </div>
            </div>
            <div class="order-right">
                <i class="iconfont">&#xe61c;</i>
                <span>我的钱包</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../../static/less/var';

    .center-order-coupon {
        padding-top: @font-size-small;
        color: @title-color;
        background: white;
        .center-order {
            display: flex;
            height: 130px;
            box-sizing: border-box;
            padding: @font-size-small;
            .order-left {
                flex: 1;
                display: flex;
                .left-item {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    span {
                        padding-top: @font-size-small;
                        font-size: @font-size-normal;
                    }
                }
            }
            .order-right {
                flex-basis: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                i {
                    color: #eb3c3c;
                }
                span {
                    padding-top: @font-size-small;
                    font-size: @font-size-normal;
                }
            }
        }
        .center-coupon {
            display: flex;
            height: 130px;
            box-sizing: border-box;
            padding: @font-size-small;
            .order-left {
                flex: 1;
                display: flex;
                .left-item {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    label {
                        font-size: @font-size-big;
                        color:#ff7459;
                    }
                    span {
                        padding-top: @font-size-small;
                        font-size: @font-size-normal;
                    }
                }
            }
            .order-right {
                flex-basis: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                i {
                    color: #eb3c3c;
                }
                span {
                    padding-top: @font-size-small;
                    font-size: @font-size-normal;
                }
            }
        }
    }
</style>