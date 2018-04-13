<template>
    <div class="center-account">
        <div class="account-wrap">
            <div class="account-avatar">
                <img src="../../static/images/center-person-logo.png">
            </div>
            <div class="account-info">
                <div class="info-nick-name">
                    <p>芯儿拽天下</p>
                    <span>金牌</span>
                </div>
                <div class="info-grade">
                    <div class="grade-item">
                        <span>京享值3476</span>
                        <i class="iconfont">&#xe62a;</i>
                    </div>
                    <div class="grade-item">
                        <span>小白心意98.23</span>
                        <i class="iconfont">&#xe62a;</i>
                    </div>
                </div>
            </div>
            <div class="account-vip-plus">
                <div class="vip-plus-text">
                    <span>尊享8大特权</span>
                    <i class="iconfont">&#xe62a;</i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../../static/less/var';

    .center-account {
        background: white;
        .account-wrap {
            position: relative;
            display: flex;
            height: 300px;
            padding: 0 @font-size-small;
            border-bottom-left-radius: 100% 60px;
            border-bottom-right-radius: 100% 60px;
            background: linear-gradient(90deg, #eb3c3c, #ff7459);
            overflow: hidden;
            .account-avatar {
                display: flex;
                flex-basis: 160px;
                align-items: center;
                img {
                    width: 140px;
                    height: 140px;
                    border: 3px solid #d42828;
                    border-radius: 140px;
                }
            }
            .account-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex: 1;
                .info-nick-name {
                    display: flex;
                    height: 70px;
                    align-items: center;
                    p {
                        margin: 0;
                        font-size: @font-size-big;
                        font-weight: 600;
                        color: white;
                    }
                    span {
                        padding: 5px 20px;
                        margin-left: @font-size-small * 2;
                        border-radius: 30px;
                        font-size: @font-size-normal;
                        color: white;
                        background: RGBA(0, 0, 0, 0.1);
                    }
                }
                .info-grade {
                    display: flex;
                    .grade-item {
                        display: flex;
                        align-items: center;
                        height: 35px;
                        padding: 0 @font-size-small;
                        border-radius: 35px;
                        color: white;
                        background: RGBA(0, 0, 0, 0.1);
                        span {
                            font-size: @font-size-normal;
                        }
                        i {
                            font-size: @font-size-normal;
                        }
                        &:not(:first-child) {
                            margin-left: @font-size-small * 2;
                        }
                    }
                }
            }
            .account-vip-plus {
                position: absolute;
                bottom: -10px;
                right: -10px;
                width: 220px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: rotate(11deg);
                border-radius: @font-size-small;
                background: #333 url(../../static/images/center-vip-plus.png) no-repeat 14px 7px;
                background-size: 50%;
                .vip-plus-text {
                    display: flex;
                    height: 35px;
                    align-items: center;
                    padding: 0 @font-size-small;
                    border-radius: 35px;
                    color: #cead68;
                    background: RGBA(255, 255, 255, 0.1);
                    span {
                        font-size: @font-size-normal;
                    }
                    i {
                        font-size: @font-size-normal;
                    }
                }
            }
        }
    }
</style>