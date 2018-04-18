<template>
    <div class="m-cell-group">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'm-cell-group'
    }
</script>

<style lang="less" scoped>
    @import '../../../../static/less/var';

    .m-cell-group {
        position: relative;
        padding-left: @font-size-small;
        background: white;
        &:not(:first-child) {
            margin-top: @font-size-small * 1.5;
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
        &::after {
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            border-bottom: 1px solid @border-color;
            transform: scaleY(0.5);
        }
    }
</style>