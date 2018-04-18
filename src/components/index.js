import mScroll from './packages/m-scroll/index.js'
import mFloor from './packages/m-floor/index.js'
import mTab from './packages/m-tab/index.js'
import mTabItem from './packages/m-tab-item/index.js'
import mSwipe from './packages/m-swipe/index.js'
import mSwipeItem from './packages/m-swipe-item/index.js'
import mProduct from './packages/m-product/index.js'
import mDivider from './packages/m-divider/index.js'
import mCell from './packages/m-cell/index.js'
import mCellGroup from './packages/m-cell-group/index.js'


const version = '1.0.0'

const install = function (Vue, config = {}) {
    if (install.installed) return

    Vue.component(mScroll.name, mScroll)
    Vue.component(mFloor.name, mFloor)
    Vue.component(mTab.name, mTab)
    Vue.component(mTabItem.name, mTabItem)
    Vue.component(mSwipe.name, mSwipe)
    Vue.component(mSwipeItem.name, mSwipeItem)
    Vue.component(mProduct.name, mProduct)
    Vue.component(mDivider.name, mDivider)
    Vue.component(mCell.name, mCell)
    Vue.component(mCellGroup.name, mCellGroup)
}

export default {
    version,
    install
}