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
    <myfooter></myfooter>
  </div>
</template>

<script>
import top from "./homechildren/top.vue";
import sample from "./homechildren/sample.vue";
import myarticle from "./homechildren/myarticle.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  data() {
    return {};
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 0) {
        this.$store.commit("isNavShow");
      } else {
        this.$store.commit("noNavShow");
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
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
