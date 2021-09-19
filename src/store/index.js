import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      isScroll: false, //导航栏显示的吸顶条件
      isOther: 'no', //其他页面取消导航栏隐藏
      showArticle: {},
      length: 0,
      mine: {
        headimg: '',
        headsaying: [],
        tip: '',
        backgroundImg: [],
      }
    }
  },
  mutations: {
    mine(state, mine) {
      for (let i = 0; i < mine.length; i++) {
        if (mine[i].headimg) {
          state.mine.headimg = mine[i].headimg
        }
        if (mine[i].headsaying) {
          state.mine.headsaying.push(mine[i].headsaying)
        }
        if (mine[i].tip) {
          state.mine.tip = mine[i].tip
        }
        if (mine[i].backgroundImg) {
          state.mine.backgroundImg.push(mine[i].backgroundImg)
        }
      }
    },
    comment(state) {
      state.length++;
    },
    initLength(state, length) {
      state.length = length
    },
    isScroll(state) {
      state.isScroll = true;
    },
    noScroll(state) {
      state.isScroll = false;
    },
    enterOther(state) {
      state.isOther = 'enter';
    },
    isOther(state) {
      state.isOther = 'is'
    },
    noOther(state) {
      state.isOther = 'no';
    },
    showArticles(state, showArticle) {
      state.showArticle = showArticle;
    }
  },
  actions: {
  },
  modules: {
  }
})
