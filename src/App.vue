<template>
    <div id="app">
        <router-animation></router-animation>
    </div>
</template>

<script>
	import routerAnimation from './view/common/router-animation'

	export default {
		name: 'App',
		components: {
			routerAnimation
		}
	}
</script>

<style lang="less" scoped>
    @import './static/less/var';
    #app {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: @background-color;
    }
</style>
