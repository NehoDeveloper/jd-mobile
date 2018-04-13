import mScroll from './packages/m-scroll/index.js'


const version = '1.0.0'

const install = function (Vue, config = {}) {
    if (install.installed) return

    Vue.component(mScroll.name, mScroll)
}

export default {
    version,
    install
}