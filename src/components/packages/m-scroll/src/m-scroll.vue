<template>
    <div class="m-scroll" :style="styles">
        <div class="scroll-view">
            <slot></slot>
        </div>
        <div class="m-scroll-top">
            <slot name="top"></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BetterScroll from 'better-scroll'

    export default {
        name: 'm-scroll',
        data () {
            return {
                instanceScroll: {},
            }
        },
        props: {
            options: {
                type: Object,
                default () {
                    return {
                        scrollY: true,
                        click: true,
                        probeType: 3
                    }
                }
            },
            styles: {
                type: String,
                required: true
            }
        },
        methods: {
            bindEvent () {
                const self = this;
                this.instanceScroll.on('scroll', (e) => {
                    self.emitEvent('scroll', e)
                })
            },
            emitEvent (type, val) {
                this.$emit(type, val)
            },
            init () {
                this.instanceScroll = new BetterScroll('.m-scroll', this.options)
                this.bindEvent()
            }
        },
        mounted () {
            this.init()
        }
    }
</script>

<style lang="less" scoped>
    .m-scroll {
        position: relative;
        overflow: hidden;
        .scroll-view{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            z-index: 6;
        }
        &-top{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            z-index: 5
        }
    }
</style>