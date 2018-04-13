import Vue from 'vue'
import VueRouter from 'vue-router'
import {first} from './first'
import {second} from './second'

Vue.use(VueRouter)

const routes = first.concat(second)

export const router = new VueRouter({
	mode: 'history',
	routes
})