import * as types from './mutation-types'
import {http} from '../../service/http'
import {User} from "../../validate/modules/user"
import {sessionHelper} from "../../service/session"

export const actions = {
    login ({commit}, o) {
        return new Promise((resolve, reject) => {
            /**
             * 验证用户输入信息
             * @param object o // {account: 'xxx', password: 'xxx'}
             * return object
             */
            const validate = new User('login',{toast: true}).check(o)
            if (validate.success) {
                http.user.login(o).then(res => {
                    if (res.success) {
                        sessionHelper.setToken(res.data.token)
                        commit(types.INIT_USER_INFO, res.data.info)
                        resolve(res.data.info)
                    }
                })
            }
        })
    }
}
