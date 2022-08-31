import Vue from 'vue'
import T3CeHeader from '~/components/T3CeHeader/T3CeHeader.vue'
const components = {
    T3CeHeader
}
export default ({ app }) => {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  })
}