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
        <div class="index-view"></div>
    </div>
</template>


<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    @import '../../static/less/var';

    .index {
        .index-header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            box-sizing: border-box;
            height: 98px;
            display: flex;
            align-items: center;
            padding: 0 @font-size-small;
            z-index: 10;
            .header-scan {
                flex-basis: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #666666;
                i {
                    flex-basis: 60px;
                    font-size: 60px;
                    line-height: 60px;
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
                    height: 68px;
                    border-radius: 40px;
                    background: white;
                    color: #666666;
                    i {
                        flex-basis: 20%;
                        text-align: center;
                        font-size: 50px;
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
                color: #666666;
                i {
                    font-size: 50px;
                }
            }
        }
        .index-view {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
        }
    }
</style>