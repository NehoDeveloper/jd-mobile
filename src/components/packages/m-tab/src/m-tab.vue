<template>
    <div class="m-tab">
        <div class="m-tab-wrap">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BetterScroll from 'better-scroll'

    export default {
        name: 'm-tab',
        data() {
            return {
                tabScrollOptions: {
                    scrollX: true,
                    click: true,
                    probeType: 3
                }
            }
        },
        methods: {
            init() {
                new BetterScroll('.m-tab', this.tabScrollOptions)
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style lang="less" scoped>
    .m-tab {
        width: 100%;
        background: white;
        overflow-x: hidden;
        .m-tab-wrap {
            white-space: nowrap;
            display: inline-block;
            height: 70px;
        }
    }
</style>