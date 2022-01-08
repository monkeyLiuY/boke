import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state ={
  // 控制content开，essay就关
  con_ess_switch: true
}

const store = new Vuex.Store({
  state
})

export default  store