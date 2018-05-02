<template>
    <div class="login-password">
        <div class="password-item">
            <i class="iconfont">&#xe62b;</i>
            <input type="text" placeholder="已验证的手机号/邮箱" v-model="form.account">
        </div>
        <div class="password-item">
            <i class="iconfont">&#xe61b;</i>
            <input type="password" placeholder="账户密码" v-model="form.password">
        </div>
        <div class="password-submit">
            <span @click="login">登陆</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                form:{
                    account:'',
                    password:''
                }
            }
        },
        methods: {
            ...mapActions({
                userLogin: 'login'
            }),
            login() {
                this.userLogin(this.form).then(res => {
                    this.goto('/index')
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../static/less/var';
    .login-password {
        .password-item {
            position: relative;
            height: 90px;
            display: flex;
            align-items: center;
            input {
                margin-left: @font-size-small;
                border: none;
                outline: none;
            }
            &::after {
                position: absolute;
                content: '';
                bottom: 0;
                left: 0;
                width: 100%;
                border-bottom: 1px solid @border-color;
                transform: scaleY(0.5);
            }
        }
        .password-submit {
            padding: @font-size-big 0;
            span {
                display: block;
                height: 80px;
                line-height: 80px;
                border-radius: 10px;
                font-weight: bold;
                text-align: center;
                color: white;
                background: @jd-red-color;
            }
        }
    }
</style>