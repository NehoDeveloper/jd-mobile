<template>
    <div class="m-cell">
        <div class="cell-view">
            <span>{{title}}</span>
            <slot></slot>
        </div>
        <div class="cell-right">
            <slot name="icon-right"></slot>
            <span>{{value}}</span>
            <i class="iconfont">&#xe62a;</i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'm-cell',
        props: {
            title: {
                type: String
            },
            value: {
                type: String
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../../static/less/var';

    .m-cell {
        position: relative;
        min-height: 88px;
        display: flex;
        font-size: @font-size-normal * 1.2;
        .cell-view {
            flex: 1;
            display: flex;
            align-items: center;
        }
        .cell-right {
            display: flex;
            flex-grow: 0;
            align-items: center;
            padding-right:@font-size-small;
            span{
                color:@sub-color;
            }
            i {
                font-size: @font-size-small * 2;
                color: @sub-color;
            }
        }
        &:not(:first-child) {
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
</style>