<template>
    <app-page>
         <m-scroll styles="height:100%;">
             <div class="profile">
                <m-cell-group>
                    <m-cell title="头像">
                        <div class="profile-avatar" slot="icon-right">
                            <img src="../../../../static/images/center-person-logo.png" alt="">
                        </div>
                    </m-cell>
                    <m-cell title="用户名" value="邓海标"></m-cell>
                    <m-cell title="昵称" value="芯儿拽天下"></m-cell>
                    <m-cell title="性别" value="男"></m-cell>
                    <m-cell title="出生日期" value="1994年07月26日"></m-cell>
                </m-cell-group>
             </div>
         </m-scroll>
    </app-page>
</template>

<style lang="less" scoped>
@import '../../../../static/less/var';
.profile{
    .profile-avatar{
        display: inline-block;
        padding:@font-size-small @font-size-small / 2;
        img{
            width:120px;
            height:120px;
            border-radius: 60px;
        }
    }
}
</style>
