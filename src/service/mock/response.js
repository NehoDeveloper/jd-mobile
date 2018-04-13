const customizedReturn = function (success, data, msg, code) {
	return {
		success: success,
		data: data,
		msg: msg,
		code: code
	}
}

export default {
	login () {
		return customizedReturn(true, {
			token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjMyNzgzOTQsImV4cCI6MTUyNTg3MDM5NCwiZGF0YSI6eyJ1c2VyX2lkIjoxMX19.gV7W-Zx53bYFsMTVl2-grmQfihejApHKfizWAkwXDpM'
		}, '登录成功', 10000)
	}
}