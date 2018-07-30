import Vue from 'vue'
import Vuex from 'vuex'
import creatives from './modules/creatives'
import weather from './modules/weather'


Vue.use(Vuex)
const namespaced = true
export default new Vuex.Store({
  namespaced,
  modules: {
    creatives,
    weather
  }
  })