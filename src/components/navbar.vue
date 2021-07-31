<template>
  <div>
    <transition mode="out-in" name="slide-fade">
      <div v-if="!isShow" id="nav1" @mouseenter="over" key="nav1">
        <div class="left"><span>爱敲代码の</span>秃头鱼</div>
      </div>
      <div v-else id="nav2" @mouseleave="out" key="nav2">
        <div class="left"><span>爱敲代码の</span>秃头鱼</div>
        <div class="right">
          <div class="right-content">
            <div class="right-item" @click="toHome">
              <span class="icon iconfont iconexit">&#xe63a; </span>首页
            </div>
            <div class="right-item" @click="toTime">
              <span class="icon iconfont iconexit">&#xe63e; </span>归档
            </div>
            <div class="right-item">
              <span class="icon iconfont iconexit">&#xe64c; </span>清单
              <div class="drowList">
                <div @click="toAnime">
                  <span class="icon iconfont iconexit"> &#xe642; </span>番剧
                </div>
                <div @click="toMusic">
                  <span class="icon iconfont iconexit"> &#xe641; </span>音乐
                </div>
                <div @click="toGame">
                  <span class="icon iconfont iconexit"> &#xe646; </span>游戏
                </div>
                <div @click="toBook">
                  <span class="icon iconfont iconexit"> &#xe650; </span>书籍
                </div>
              </div>
            </div>
            <div class="right-item" @click="toMessage">
              <span class="icon iconfont iconexit">&#xe646; </span>留言板
            </div>
            <div class="right-item" @click="toAbout">
              <span class="icon iconfont iconexit">&#xe651; </span>关于
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navShow: false,
      navFlag: true,
    };
  },
  computed: {
    isShow() {
      return this.navShow||this.$store.state.navShow || this.$store.state.isOther;//悬浮 滚动 其他页面三种任意一种触发导航栏
    },
  },
  methods: {
    over() {
      this.navShow=true;
    },
    out() {
      this.navShow=false;
    },
    toHome() {
      this.$store.commit("noOther");
      this.$router.push("home");
    },
    toAbout() {
      this.$store.commit("isOther");
      this.$router.push("about");
    },
    toMessage() {
      this.$store.commit("isOther");
      this.$router.push("message");
    },
    toBook() {
      this.$store.commit("isOther");
      this.$router.push("book");
    },
    toAnime() {
      this.$store.commit("isOther");
      this.$router.push("anime");
    },
    toGame() {
      this.$store.commit("isOther");
      this.$router.push("game");
    },
    toMusic() {
      this.$store.commit("isOther");
      this.$router.push("music");
    },
    toTime() {
      this.$store.commit("isOther");
      this.$router.push("time");
    },
  },
};
</script>
<style lang="scss" scoped>
#nav1 {
  color: rgb(44, 41, 41);
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0);
  height: 60px;
  .left {
    float: left;
    line-height: 60px;
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
    span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      background-color: rgba(238, 227, 238, 0.3);
      border-radius: 10px;
    }
  }
  .right {
    float: right;
    .right-content {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .right-item {
        position: relative;
        text-align: center;
        height: 60px;
        line-height: 60px;
        margin: 0 15px;
        transition: all 0.4s ease;
        &:hover {
          color: #d3a4ff;
          span {
            animation: word 2s infinite;
          }
          @keyframes word {
            0% {
              font-size: 20px;
            }
            50% {
              font-size: 30px;
            }
            100% {
              font-size: 20px;
            }
          }
          &::after {
            transform: scale3d(1, 1, 1);
          }
        }
        &::after {
          content: "";
          display: block;
          height: 5px;
          width: 100%;
          position: absolute;
          bottom: 5px;
          background-color: #d2a1ff;
          transition: all 0.3s ease-in-out;
          transform: scale3d(0, 1, 1);
        }
        &:nth-child(3):hover {
          .drowList {
            display: block;
            animation: drowList 0.7s;
            position: relative;
            z-index: 10;
          }
          @keyframes drowList {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
        .drowList {
          transition: all 2s linear;
          color: rgb(44, 41, 41);
          width: 140%;
          transform: translate(-15%);
          margin: -12px 0;
          border-radius: 7px;
          background-color: white;
          display: none;
          box-shadow: 0px 0px 5px #2e2d2d;
          div {
            line-height: 50px;
            height: 50px;
            &:hover {
              color: #d3a4ff;
            }
          }
        }
      }
    }
  }
}
#nav2 {
  @extend #nav1;
  background-color: rgba(255, 253, 255, 0.5);
  box-shadow: 5px 0px 5px #2e2d2d;
  .left:hover {
    color: #d3a4ff;
    span {
      color: white;
      background-color: rgba(184, 6, 184, 0.3);
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.6s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  .right-content {
    transition: all 0.8s ease;
  }
}
.slide-fade-enter,
.slide-fade-leave-to {
  .right-content {
    transform: translate(-40px);
  }
}
</style>