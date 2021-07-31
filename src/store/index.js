import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return {
      navShow:false, //导航栏显示的吸顶条件
      isOther:true, //其他页面取消导航栏隐藏
  }
  },
  mutations: {
    isNavShow(state){
       state.navShow=true;
    },
    noNavShow(state){
      state.navShow=false;
    },
    isOther(state){
      state.isOther=true;
    },
    noOther(state){
      state.isOther=false;
    }
  },
  actions: {
  },
  modules: {
  }
})
