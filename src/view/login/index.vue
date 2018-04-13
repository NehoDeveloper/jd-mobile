<template>
    <app-page>
        <div class="login">
            <div class="login-logo">
                <img src="../../static/images/app-logo.png">
                <span>广告狗</span>
            </div>
            <div class="login-field">
                <div class="field-item">
                    <i class="iconfont">&#xe62b;</i>
                    <input type="text" placeholder="已验证的手机号/邮箱" v-model="form.account">
                </div>
                <div class="field-item">
                    <i class="iconfont">&#xe61b;</i>
                    <input type="password" placeholder="账户密码" v-model="form.password">
                </div>
                <div class="field-submit">
                    <span @click="login">登陆</span>
                </div>
            </div>
            <div class="login-help">
                <span>忘记密码？</span>
                <span>新用户注册</span>
            </div>
            <div class="login-third-party">
                <div class="third-party-box">
                    <div class="box-item">
                        <i class="iconfont">&#xe635;</i>
                        <span>微信登陆</span>
                    </div>
                </div>
            </div>
            <div class="login-provision">
                <p>登陆即代表阅读并同意<label>服务条款</label></p>
            </div>
        </div>
    </app-page>
</template>

<script type="text/ecmascript-6">
	export default {
		data () {
			return {
				form: {
					account: '',
					password: ''
				}
			}
		},
		methods: {
			login () {
				const self = this;
				const data = {
					account: this.form.account,
					password: this.form.password
				}
				this.$http.user.login(data).then(res => {
					if (res.success) {
						self.$mToast('登陆成功')
						self.goto('/index')
					}
				}, error => {
				})
			}
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
        box-sizing: border-box;
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        background: url(../../static/images/login-bg.png) center no-repeat;
        background-size: 100% 100%;
        .login-logo {
            flex-basis: 250px;
            box-sizing: border-box;
            padding-top: 140px;
            display: flex;
            align-items: center;
            img {
                width: 100px;
                height: 100px;
            }
            span {
                margin-left: 40px;
                font-size: 40px;
                font-weight: 600;
                color: white;
            }
        }
        .login-field {
            padding-top: 70px;
            color: white;
            .field-item {
                position: relative;
                height: 90px;
                display: flex;
                align-items: center;
                input {
                    margin-left: @font-size-small;
                    border: none;
                    outline: none;
                    background: RGBA(255, 255, 255, 0);
                    &::-webkit-input-placeholder {
                        color: white;
                    }
                }
                &::after {
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    border-bottom: 1px solid white;
                    transform: scaleY(0.5);
                }
            }
            .field-submit {
                padding: @font-size-big 0;
                span {
                    display: block;
                    height: 80px;
                    line-height: 80px;
                    border-radius: 10px;
                    font-weight: bold;
                    text-align: center;
                    color: white;
                    background: @primary-color;
                }
            }
        }
        .login-help {
            flex-grow: 0;
            display: flex;
            justify-content: space-between;
            span {
                font-size: @font-size-big;
                color: @primary-color;
            }
        }
        .login-third-party {
            position: relative;
            flex: 1;
            .third-party-box {
                position: absolute;
                top: 50%;
                left: 50%;
                display: flex;
                transform: translate(-50%, -50%);
                padding: 50px 0;
                .box-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    i {
                        font-size: 70px;
                        color: #62b900;
                    }
                    span {
                        font-size: @font-size-big;
                        color: white;
                    }
                }
                &::before {
                    position: absolute;
                    content: '第三方登陆';
                    top: 0;
                    left: 50%;
                    color: @primary-color;
                    transform: translate(-50%, -50%);
                    white-space: nowrap;
                }
            }
        }
        .login-provision {
            flex-basis: 98px;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
                font-size: @font-size-big;
                color: white;
                label {
                    color: @primary-color;
                }
            }
        }
    }
</style>