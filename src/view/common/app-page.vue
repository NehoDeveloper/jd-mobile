<template>
    <div class="app-page">
        <app-page-header v-if="headerVisible"></app-page-header>
        <div :class="classes">
            <router-animation></router-animation>
            <slot></slot>
        </div>
        <app-page-tabbar v-if="tabbarVisible"></app-page-tabbar>
    </div>
</template>

<script type="text/ecmascript-6">
	import appPageHeader from './app-page-header'
	import appPageTabbar from './app-page-tabbar'
	import routerAnimation from './router-animation'

	export default {
		name: 'app-page',
		computed: {
			classes () {
				let arrClass = []
				arrClass.push('app-page-section')
				if (this.$route.meta.headerVisible)
					arrClass.push('with-header')
				if (this.$route.meta.tabbarVisible)
					arrClass.push('with-tabbar')
				return arrClass.join(' ')
			},
            headerVisible(){
				return this.$route.meta.headerVisible
            },
            tabbarVisible(){
	            return this.$route.meta.tabbarVisible
            }
		},
		components: {
			appPageHeader,
			appPageTabbar,
			routerAnimation
		}
	}
</script>

<style lang="less" scoped>
    .app-page {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        .app-page-section {
            position: absolute;
            top: 0;
            width: 100%;
            bottom: 0;
        }
        .with-header {
            top: 98px;
        }
        .with-tabbar {
            bottom: 108px;
        }
    }
</style>