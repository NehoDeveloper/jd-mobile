<template>
    <div :class="classes" :style="styles">
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'm-tab-item',
        props: {
            styles: {
                type: String,
                default() {
                    return 'width:25vw'
                }
            },
            active: {
                type: Boolean
            }
        },
        computed: {
            classes() {
                let arrClass = []
                arrClass.push('m-tab-item')
                if (this.active)
                    arrClass.push('m-tab-item-active')
                return arrClass.join(' ')
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../../static/less/var';

    .m-tab-item {
        display: inline-block;
        text-align: center;
        span {
            display: inline-block;
            height: 70px;
            line-height: 70px;
            font:@font-size-big;
            font-weight: 600;
        }
        &-active {
            color: @jd-red-color;
            span {
                position: relative;
                &::after {
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0;
                    border-bottom: 5px solid @jd-red-color;

                }
            }
        }
    }
</style>