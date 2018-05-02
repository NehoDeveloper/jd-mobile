import Vue from 'vue'
const LoadingConstructor = Vue.extend(require('./m-loading.vue').default)

const getAnInstance = () => {
  return new LoadingConstructor({
    el: document.createElement('div')
  })
}

const instance = getAnInstance()

instance.close = () => {
  if (instance.$el.parentNode) {
    instance.$el.parentNode.removeChild(instance.$el)
  }
}

let mLoading = (options, fn) => {
  document.body.appendChild(instance.$el)
  return instance
}

export default mLoading
