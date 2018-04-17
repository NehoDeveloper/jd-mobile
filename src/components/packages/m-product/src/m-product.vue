<template>
    <div class="m-product">
        <div class="product-image">
            <img src="../../../../static/images/center-recommend-1.webp" alt="">
        </div>
        <div class="product-desc">
            <p>亿凡 实木床 1.5米简约中式橡木床 1.8米高箱床双人床 限量定制款1.2米 1200*2000mm</p>
        </div>
        <div class="product-price">
            <label>￥</label>
            <span>2574.00</span>
        </div>
        <div class="product-evaluate">
            <span>好评率98.00%</span>
        </div>
        <div class="product-similar">
            <span>看相似</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'm-product'
    }
</script>

<style lang="less" scoped>
    @import '../../../../static/less/var';

    .m-product {
        position: relative;
        background: white;
        .product-image {
            position: relative;
            width: 100%;
            height: 380px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .product-desc {
            margin: @font-size-small / 2 0;
            padding: 0 @font-size-small / 2;
            p {
                display: -webkit-box;
                height: 70px;
                line-height: 35px;
                margin: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: @font-size-normal;
            }
        }
        .product-price {
            display: flex;
            height: 40px;
            align-items: flex-end;
            padding:0 @font-size-small / 2;
            color: @jd-red-color;
            label {
                font-size: @font-size-normal;
            }
            span {
                font-size: @font-size-big;
            }
        }
        .product-evaluate{
            display: flex;
            height: 70px;
            align-items: center;
            padding:0 @font-size-small / 2;
            color: @content-color;
            span{
                flex-grow: 0;
                font-size: @font-size-small;
            }
        }
        .product-similar{
            position: absolute;
            bottom:@font-size-small;
            right:@font-size-small;
            span{
                display: block;
                padding:@font-size-small / 2;
                font-size: @font-size-small;
                border:1px solid #bfbfbf;
                color:#686868;
            }
        }
    }
</style>