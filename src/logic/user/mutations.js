import * as types from './mutation-types'

export const mutations = {
    [types.INIT_USER_INFO] (state, o) {
        state.nickName = o.nickName
        state.avatar = o.avatar
    }
}
