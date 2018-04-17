<template>
    <div class="m-swipe-item">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'm-swipe-item'
    }
</script>

<style lang="less" scoped>
    .m-swipe-item {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
</style>