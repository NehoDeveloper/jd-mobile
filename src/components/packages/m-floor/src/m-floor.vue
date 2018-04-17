<template>
    <div class="m-floor">
        <div class="floor-header" :style="{backgroundImage:`url(${options.headerImg})`}">
            <div class="header-more">
                <span>{{options.headerLeftText}}</span>
                <i class="iconfont">&#xe62a;</i>
            </div>
        </div>
        <div class="floor-view">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'm-floor',
        props: {
            options: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../../static/less/var';

    .m-floor {
        margin-top: @font-size-small;
        .floor-header {
            position: relative;
            display: flex;
            height: 68px;
            background-size: 100% 100%;
            .header-more {
                position: absolute;
                top: 0;
                right: @font-size-small;
                height: 100%;
                display: flex;
                align-items: center;
                span {
                    flex-grow: 0;
                    font-size: @font-size-normal;
                    margin-right: 30px + @font-size-small;
                    color: @content-color;
                    word-break: keep-all;
                }
                i {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    font-size: @font-size-normal;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 30px;
                    background: @jd-red-color;
                    color: white;
                }
            }
        }
    }
</style>