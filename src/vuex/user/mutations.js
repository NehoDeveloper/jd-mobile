import * as types from './mutation-types'

export default {
	[types.SET_PROFILE] (state, o) {
		state.nickName = o.nickName
	}
}