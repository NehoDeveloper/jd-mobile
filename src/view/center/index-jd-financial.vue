<template>
    <div class="center-jd-financial">
        <div class="financial-header">
            <span>金融服务</span>
            <i class="iconfont">&#xe69b;</i>
        </div>
        <div class="financial-section border-1px-top border-1px-bottom">
            <div class="section-cell">
                <div class="cell-left">
                    <i class="iconfont" style="background: #19A160;">&#xe607;</i>
                    <span>账单</span>
                </div>
                <div class="cell-mid">
                    <div class="mid-title">
                        <span class="title-price">230.00</span>
                        <span class="title-time">最近消费</span>
                    </div>
                    <div class="mid-desc">
                        <p>无穷 爱辣烤鸡爪广东特产香辣鸡爪</p>
                    </div>
                </div>
                <div class="cell-right">
                    <span>去查看</span>
                </div>
            </div>
            <div class="section-cell">
                <div class="cell-left">
                    <i class="iconfont" style="background: #FFE642">&#xe607;</i>
                    <span>小金库</span>
                </div>
                <div class="cell-mid">
                    <div class="mid-title">
                        <span class="title-text">能赚会花 购物返利</span>
                    </div>
                    <div class="mid-desc">
                        <p>7日年化收益率4.61%</p>
                    </div>
                </div>
                <div class="cell-right">
                    <span>去查看</span>
                </div>
            </div>
        </div>
        <div class="financial-footer">
            <span>查看更多</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../../static/less/var';

    .center-jd-financial {
        margin-top: @font-size-small;
        background: white;
        .financial-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            padding: 0 @font-size-small;
            span {
                font-size: @font-size-normal;
            }
            i {
                font-size: @font-size-big;
                color: @content-color;
            }
        }
        .financial-section {
            padding-left: @font-size-small;
            .section-cell {
                display: flex;
                height: 150px;
                .cell-left {
                    flex-basis: 150px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    i {
                        flex-basis: 50px;
                        width: 50px;
                        text-align: center;
                        line-height: 50px;
                        font-size: @font-size-normal;
                        border-radius: 50px;
                        color:white;
                    }
                    span{
                        margin-top:@font-size-small;
                    }
                }
                .cell-mid {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .mid-title {
                        flex-grow: 0;
                        display: flex;
                        height: 50px;
                        .title-price {
                            flex-grow: 0;
                            line-height: 50px;
                            font-size: @font-size-big;
                            font-weight: 600;
                            &::before {
                                content: '￥';
                                font-size: @font-size-small;
                            }
                            &::after {
                                content: '元';
                                font-size: @font-size-small;
                            }
                        }
                        .title-time {
                            flex-grow: 0;
                            margin-left: @font-size-small;
                            line-height: 50px;
                        }
                        .title-text{
                            flex-grow: 0;
                            line-height: 50px;
                        }
                    }
                    .mid-desc {
                        flex-grow: 0;
                        display: flex;
                        align-items: center;
                        height: 50px;
                        p {
                            flex: 1;
                            margin: 0;
                            color:@content-color;
                        }
                    }
                }
                .cell-right {
                    flex-basis: 170px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    box-sizing: border-box;
                    padding-right: @font-size-small;
                    span {
                        flex-grow: 0;
                        height: 50px;
                        padding: 0 @font-size-small * 2;
                        line-height: 50px;
                        color: @primary-color;
                        border-radius: 50px;
                        border: 1px solid @primary-color;
                    }
                }
                &:not(:first-child) {
                    position: relative;
                    &::before {
                        position: absolute;
                        content: '';
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 0;
                        border-top: 1px solid @border-color;
                        transform: scaleY(0.5);
                    }
                }
            }
        }
        .financial-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            span {
                color: @content-color;
            }
        }
    }
</style>