<template>
  <div class="home">
    <top
      ref="top"
      v-if="this.$store.state.mine.backgroundImg.length >= 6"
    ></top>
    <div class="out">
      <div class="tip">
        <span class="icon iconfont iconexit">&#xe650; </span>Welcome to my blog
        !
      </div>
    </div>
    <sample :samples="samples"></sample>
    <myarticle :articles="articles" @more="more"></myarticle>
    <transition name="toTop">
      <div class="toTop" ref="toTop" v-if="show" key="toTop" @click="toTop">
        <toTop></toTop>
      </div>
    </transition>
    <myfooter></myfooter>
  </div>
</template>

<script>
const top = () => import("./homechildren/top.vue");
const sample = () => import("./homechildren/sample.vue");
const myarticle = () => import("./homechildren/myarticle.vue");
const myfooter = () => import("@/components/myfooter.vue");
const toTop = () => import("./homechildren/toTop.vue");
import { getArticles } from "@/network/articles.js";
import { getMine } from "@/network/mine.js";
export default {
  data() {
    return {
      show: false,
      articles: [],
      samples: [],
      mine: {},
      isFirst: true,
      articlesNum:1,
    };
  },
  created() {
    getMine().then((res) => {
      this.$store.commit("mine", res);
    });
  },
  methods: {
    more(){
        this.articlesNum++;
        getArticles(this.articlesNum).then((res) => {
            for (let i = 0; i < res.length; i++) {
              res[i].time = res[i].time.slice(0, 10);
              this.articles.push(res[i]);
              this.articles[i].content = this.articles[i].content.replaceAll(
                "&lt;",
                "<"
              );
              this.articles[i].content = this.articles[i].content.replaceAll(
                "&gt;",
                ">"
              );
              if (res[i].star == 1) {
                this.samples.push(res[i]);
              }
            }
          });
    },
    toTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 0) {
        this.$store.commit("isScroll");
        if (this.isFirst) {
          this.isFirst=false;
          getArticles(this.articlesNum).then((res) => {
            for (let i = 0; i < res.length; i++) {
              res[i].time = res[i].time.slice(0, 10);
              this.articles.push(res[i]);
              this.articles[i].content = this.articles[i].content.replaceAll(
                "&lt;",
                "<"
              );
              this.articles[i].content = this.articles[i].content.replaceAll(
                "&gt;",
                ">"
              );
              if (res[i].star == 1) {
                this.samples.push(res[i]);
              }
            }
          });
        }
      } else {
        this.$store.commit("noScroll");
      }
      if (scrollTop >= 750) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.$store.commit("noOther");
  },
  components: {
    top,
    sample,
    myarticle,
    myfooter,
    toTop,
  },
};
</script>
<style lang="scss" scoped>
.toTop-enter-active,
.toTop-leave-active {
  transition: opacity 0.8s;
}
.toTop-enter,
.toTop-leave-to {
  opacity: 0;
}
.home {
  min-width: 825px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  transform: none;
  .toTop {
    position: fixed;
    left: 90%;
    top: 60%;
  }
  .out {
    width: 100%;
    min-width: 845px;
    display: flex;
    justify-content: center;
    .tip {
      text-align: center;
      border-radius: 5px;
      font-weight: bold;
      font-size: 20px;
      width: 300px;
      line-height: 40px;
      height: 50px;
      border-bottom: 2px dotted rgb(190, 189, 189);
      margin-top: 8px;
      padding-left: 10px;
    }
  }
}
</style>
