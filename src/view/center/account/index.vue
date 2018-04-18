<template>
    <app-page>
        <m-scroll styles="height:100%;">
            <div class="account">
                <m-cell-group>
                    <m-cell @click.native="goto('/account/profile')">
                        <div class="account-profile">
                            <div class="profile-avatar">
                                <img src="../../../static/images/center-person-logo.png" alt="">
                            </div>
                            <div class="profile-info">
                                <div class="info-nick-name-sex">
                                    <span>芯儿拽天下</span>
                                    <i class="iconfont">&#xe6e4;</i>
                                </div>
                                <div class="info-name">
                                    <span>用户名：邓海标</span>
                                </div>
                            </div>
                        </div>
                    </m-cell>
                </m-cell-group>
                <m-cell-group>
                    <m-cell title="会员俱乐部"></m-cell>
                    <m-cell title="PLUS会员"></m-cell>
                    <m-cell title="小白信用"></m-cell>
                    <m-cell title="地址管理"></m-cell>
                    <m-cell title="赠票资质"></m-cell>
                </m-cell-group>
                <m-cell-group>
                    <m-cell title="实名认证"></m-cell>
                    <m-cell title="账户安全"></m-cell>
                    <m-cell title="支付设置"></m-cell>
                    <m-cell title="关联账户"></m-cell>
                </m-cell-group>
            </div>
        </m-scroll>
    </app-page>
</template>

<style lang="less" scoped>
    @import '../../../static/less/var';
    .account{
        .account-profile{
            display: flex;
            height: 170px;
            align-items: center;
            .profile-avatar{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-basis: 170px;
                height: 170px;
                img{
                    width: 120px;
                    height: 120px;
                    border-radius: 60px;
                }
            }
            .profile-info{
                margin-left:@font-size-small;
                white-space: nowrap;
                .info-nick-name-sex{
                    display: flex;
                    height: 50px;
                    align-items: center;
                    span{
                        font-size: @font-size-big;
                    }
                    i{
                        margin-left:@font-size-small;
                        font-size: @font-size-small * 2;
                        color:@primary-color;
                    }
                }
                .info-name{
                    display: flex;
                    height: 50px;
                    align-items: center;
                    color:@sub-color;
                }
            }
        }
    }
</style>