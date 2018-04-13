import Mock from 'mockjs'
import {appConfig} from '../../config'
import response from './response'

Mock.mock(appConfig.mock.api + '/api/user/login', (option) => {
	return response.login();
});