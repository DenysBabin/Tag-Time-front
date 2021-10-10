import Vue from 'vue'
import Vuex from 'vuex'
import habit from './habit'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    habit,
  }
})
