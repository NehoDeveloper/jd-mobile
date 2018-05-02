<template>
    <div class="m-swipe">
        <div class="swipe-box" :style="{height:height}">
            <slot></slot>
        </div>
        <div class="swipe-dots">
            <div :class="currentIndex === key ? 'dots-item dots-item-active' : 'dots-item'"
                 :key="key"
                 v-for="(value,key) in nodesLength">
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'm-swipe',
        data() {
            return {
                width: 0,
                currentIndex: this.activeIndex,
                nodesLength: 0,
                timer: null
            }
        },
        props: {
            height: {
                type: String,
                default() {
                    return '30vh'
                }
            },
            activeIndex: {
                type: Number,
                default() {
                    return 1
                }
            },
            duration: {
                type: Number,
                default() {
                    return 2000
                }
            }
        },
        methods: {
            getSwipeWidth() {
                const swipe = document.querySelector('.swipe-box')
                this.width = swipe.offsetWidth
            },
            getChildNodes() {
                const swipe = document.querySelector('.swipe-box')
                const nodes = swipe.children
                this.nodesLength = nodes.length
                return nodes
            },
            setNodesStyle(duration) {
                const nodes = this.getChildNodes()
                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].style.transform = `translate3d(${(i - this.currentIndex) * this.width}px, 0px, 0px)`
                    nodes[i].style.transition = `all ${duration}ms`
                }
            },
            startSwipe() {
                this.clearSwipe()
                this.setNodesStyle(0)
                this.timer = setInterval(() => {
                    if (this.currentIndex < this.nodesLength - 1) {
                        this.currentIndex += 1
                    } else {
                        this.currentIndex = 0
                    }
                    this.setNodesStyle(250)
                }, this.duration)
            },
            clearSwipe() {
                clearInterval(this.timer)
            },
            init() {
                this.getSwipeWidth()
                this.startSwipe()
            }
        },
        mounted() {
            this.init()
        },
        destroyed() {
            this.clearSwipe()
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../../static/less/var';

    .m-swipe {
        position: relative;
        width: 100%;
        overflow-x: hidden;
        .swipe-box {
            position: relative;
        }
        .swipe-dots {
            position: absolute;
            bottom: @font-size-small;
            left: 0;
            display: flex;
            height: 20px;
            width: 100%;
            align-items: center;
            justify-content: center;
            .dots-item {
                flex-basis: 10px;
                flex-shrink: 0;
                height: 10px;
                border: 1px solid white;
                border-radius: 6px;
                z-index: 10;
                &:not(:first-child) {
                    margin-left: @font-size-small;
                }
                &-active {
                    background: white;
                }
            }
        }
    }
</style>