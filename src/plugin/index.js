import {serviceConfig} from '../config'
import methods from './methods'
import appPage from '../view/common/app-page'
import {http} from '../service/http'

export default {
	install (Vue) {
		Vue.component(appPage.name, appPage)
		Vue.prototype.$http = http
		Vue.mixin({
			methods: methods
		})
	}
}