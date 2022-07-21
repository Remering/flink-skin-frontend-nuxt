import Vue from 'vue'
import BalmUI from 'balm-ui'
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'
import BalmNext from 'balm-ui/dist/balm-ui-next'
import {createPinia} from 'pinia'

Vue.use(BalmUI)
Vue.use(BalmUIPlus)
Vue.use(BalmNext)
Vue.use(createPinia())