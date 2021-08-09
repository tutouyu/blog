<template>
  <div class="home">
    <top ref="top"></top>
    <div class="out">
      <div class="tip">
        <span class="icon iconfont iconexit">&#xe650; </span>Welcome to my blog
        !
      </div>
    </div>
    <sample></sample>
    <myarticle></myarticle>
    <transition name="toTop">
    <div class="toTop" ref="toTop" v-if="show" key="toTop" @click="toTop"><toTop></toTop></div>
    </transition>
    <myfooter></myfooter>
  </div>
</template>

<script>
import top from "./homechildren/top.vue";
import sample from "./homechildren/sample.vue";
import myarticle from "./homechildren/myarticle.vue";
import myfooter from "@/components/myfooter.vue";
import toTop from "./homechildren/toTop.vue";
export default {
  data() {
    return {
      show:false,
    };
  },
  methods: {
    toTop(){
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
      } else {
        this.$store.commit("noScroll");
      }
      if (scrollTop >= 750) {
       this.show=true;
      }else{
        this.show=false;
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
.toTop-enter-active, .toTop-leave-active {
  transition: opacity .8s;
}
.toTop-enter, .toTop-leave-to /* .fade-leave-active below version 2.1.8 */ {
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
    right: 200px;
    top: 400px;
  }
  .out {
    width: 55%;
    display: flex;
    justify-content: center;
    .tip {
      text-align: center;
      border-radius: 5px;
      font-weight: bold;
      font-size: 20px;
      width: 40%;
      line-height: 40px;
      height: 50px;
      border-bottom: 2px dotted rgb(190, 189, 189);
      margin-top: 8px;
      padding-left: 10px;
    }
  }
}
</style>
