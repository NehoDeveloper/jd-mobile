<template>
    <app-page>
        <div class="login">
            <login-header></login-header>
            <div class="login-view">
                <div class="view-tab">
                    <m-tab>
                        <m-tab-item active>账号密码登陆</m-tab-item>
                        <m-tab-item>手机号快捷登陆</m-tab-item>
                    </m-tab>
                </div>
                <div class="view-tab-box">
                    <login-password></login-password>
                </div>
                <div class="view-help">
                    <span>忘记密码？</span>
                    <span>新用户注册</span>
                </div>
                <m-divider text="第三方登陆"></m-divider>
                <div class="view-third-party">
                    <div class="party-item">
                        <i class="iconfont">&#xe635;</i>
                        <span>微信登陆</span>
                    </div>
                </div>
                <div class="view-provision">
                    <p>登陆即代表阅读并同意<label>服务条款</label></p>
                </div>
            </div>
        </div>
    </app-page>
</template>

<script type="text/ecmascript-6">
    import loginHeader from './login-header'
    import loginPassword from './login-password'
	export default {
		data () {
			return {
				form: {
					account: '',
					password: ''
				}
			}
		},
        components: {
            loginHeader,
            loginPassword
        }
	}
</script>

<style lang="less" scoped>
    @import '../../static/less/var';

    .login {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background: white;
        .login-view {
            position: absolute;
            top: 88px;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            padding:0 @font-size-small * 2;
            .view-tab{
                margin-top:70px;
            }
            .view-tab-box{
                margin-top:70px;
            }
            .view-help {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 50px;
                span {
                    font-size: @font-size-normal;
                    color: @sub-color;
                }
            }
            .view-third-party {
                display: flex;
                justify-content: center;
                align-items: center;
                .party-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-grow: 0;
                    i {
                        font-size: 70px;
                        color: #62b900;
                    }
                    span {
                        font-size: @font-size-normal;
                        color: @sub-color;
                    }
                }
            }
            .view-provision {
                margin-top: 150px;
                p {
                    text-align: center;
                    font-size: @font-size-big;
                    color: @sub-color;
                    label {
                        color: @primary-color;
                    }
                }
            }
        }
    }
</style>