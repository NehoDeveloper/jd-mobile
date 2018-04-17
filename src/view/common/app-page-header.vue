<template>
    <div class="app-page-header border-1px-bottom">
        <div class="header-left" @click="back" v-if="backVisible">
            <i class="iconfont">&#xe602;</i>
        </div>
        <div class="header-mid">
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    const HEADER_BACK_EXCEPTION = ['/index', '/category', '/discover', '/cart', '/center']
    export default{
    	computed:{
    		title(){
    			return this.$route.meta.title
            },
            backVisible(){
	            return !HEADER_BACK_EXCEPTION.includes(this.$route.path)
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../static/less/var';
    .app-page-header{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 88px;
        display: flex;
        background: white;
        .header-left{
            position: absolute;
            top:0;
            left:@font-size-small;
            height: 100%;
            display: flex;
            align-items: center;
        }
        .header-mid{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                font-size: @font-size-big;
            }
        }
    }
</style>