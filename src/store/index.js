import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return {
      isScroll:false, //导航栏显示的吸顶条件
      isOther:'no', //其他页面取消导航栏隐藏
  }
  },
  mutations: {
    isScroll(state){
       state.isScroll=true;
    },
    noScroll(state){
      state.isScroll=false;
    },
    enterOther(state){
      state.isOther='enter';
    },
    isOther(state){
      state.isOther='is'
    },
    noOther(state){
      state.isOther='no';
    }
  },
  actions: {
  },
  modules: {
  }
})
