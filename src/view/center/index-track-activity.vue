<template>
    <div class="center-track-activity">
        <div class="center-track border-1px-bottom">
            <div class="track-item">
                <label>3</label>
                <span>商品关注</span>
            </div>
            <div class="track-item">
                <label>1</label>
                <span>店铺关注</span>
            </div>
            <div class="track-item">
                <label>0</label>
                <span>内容收藏</span>
            </div>
            <div class="track-item">
                <label>56</label>
                <span>浏览记录</span>
            </div>
        </div>
        <div class="center-activity">
            <div class="activity-item">
                <i class="iconfont" style="background: #FF4E4C">&#xe601;</i>
                <span>我的活动</span>
            </div>
            <div class="activity-item">
                <i class="iconfont" style="background: #FFAE21">&#xe67e;</i>
                <span>社区</span>
            </div>
            <div class="activity-item">
                <i class="iconfont" style="background: #F23030">&#xe65a;</i>
                <span>客户服务</span>
            </div>
            <div class="activity-item">
                <i class="iconfont" style="background: #518AEA">&#xe6c5;</i>
                <span>排行榜</span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../../static/less/var';

    .center-track-activity {
        margin-top: @font-size-small;
        background: white;
        color: @title-color;
        .center-track {
            display: flex;
            height: 130px;
            .track-item {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                label {
                    font-size: @font-size-big;
                    font-weight: 600;
                    color: #f23030;
                }
                span {
                    font-size: @font-size-normal;
                    margin-top: @font-size-small;
                }
            }
        }
        .center-activity {
            display: flex;
            height: 130px;
            .activity-item {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                i {
                    flex-basis: 45px;
                    width:45px;
                    text-align: center;
                    line-height: 45px;
                    border-radius: 45px;
                    font-size: @font-size-big;
                    color:white;
                }
                span {
                    font-size: @font-size-normal;
                    margin-top: @font-size-small;
                }
            }
        }
    }
</style>