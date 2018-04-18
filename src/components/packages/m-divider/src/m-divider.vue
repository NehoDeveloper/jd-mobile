<template>
    <div class="m-divider">
        <div class="divider-text">{{text}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'm-divider',
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../../static/less/var';

    .m-divider {
        display: flex;
        align-items: center;
        height: 60px;
        .divider-text {
            flex-grow: 0;
            padding: 0 @font-size-small;
            color:@content-color;
        }
        &::before {
            content: '';
            flex: 1;
            border-top: 1px solid @divider-color;
            transform: scaleY(0.5);
        }
        &::after {
            content: '';
            flex: 1;
            border-top: 1px solid @divider-color;
            transform: scaleY(0.5);
        }
    }
</style>