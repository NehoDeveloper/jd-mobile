<template>
    <div class="app-page-tabbar border-1px-top">
        <div :class="classes('/index')" @click="goto('/index')">
            <i class="iconfont">&#xe628;</i>
            <span>首页</span>
        </div>
        <div :class="classes('/category')" @click="goto('/category')">
            <i class="iconfont">&#xe60a;</i>
            <span>分类</span>
        </div>
        <div :class="classes('/discover')" @click="goto('/discover')">
            <i class="iconfont">&#xe64d;</i>
            <span>发现</span>
        </div>
        <div :class="classes('/cart')" @click="goto('/cart')">
            <i class="iconfont">&#xe6ef;</i>
            <span>购物车</span>
        </div>
        <div :class="classes('/center')" @click="goto('/center')">
            <i class="iconfont">&#xe628;</i>
            <span>我的</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		methods: {
			classes (val) {
				let arrClass = []
				arrClass.push('tabbar-item')
				if (this.$route.path === val)
					arrClass.push('tabbar-item-active')
				return arrClass.join(' ')
			}
		}
	}
</script>

<style lang="less" scoped>
    @import '../../static/less/var';

    .app-page-tabbar {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 108px;
        box-sizing: border-box;
        padding: 4px 0;
        display: flex;
        background: white;
        .tabbar-item {
            display: flex;
            flex-direction: column;
            flex: 1;
            text-align: center;
            font-size: 24px;
            color: #666666;
            i {
                flex-basis: 60px;
                line-height: 60px;
                font-size: 50px;
            }
            span {
                flex: 1;
                line-height: 40px;
            }
            &-active {
                color: @jd-red-color;
            }
        }
    }
</style>