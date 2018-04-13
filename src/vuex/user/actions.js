import * as types from './mutation-types'

export default {
	setProfile ({commit}, o) {
		commit(types.SET_PROFILE, o);
	}
}